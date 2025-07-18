<?php

require_once('../Database/Database.php');

$input = json_decode(file_get_contents("php://input"), true); 

$data = new Database() ;
$connection = $data->connect(); 

$method = $_SERVER['REQUEST_METHOD'];
if ($method==='GET')
{
    $query = " select t1.course_id,t1.title,t1.description,t3.name category_name ,t1.category_id,t1.price,t1.image,t4.name teacher_name ,t1.teacher_id,t1.duration , t1.created_at , t1.updated_at from courses t1
              join teacher t2 ON t1.teacher_id = t2.teacher_id   join categories t3 ON t1.category_id = t3.category_id join user t4 ON t2.user_id=t4.user_id where t1.is_deleted = 0";
    $order = $connection->prepare($query);
    $order->execute();
    $courses = $order->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($courses);
}
else if ($method==='POST')
{
    if (!isset($input['teacher_id']))
    {
        http_response_code(400);
        echo json_encode(['error' => 'Teacher ID is Required']);
    }
    else
    {
        $query = "INSERT INTO courses (title,description,category_id,price,image,teacher_id,duration)
                  VALUES ( :title, :description, :category_id, :price, :image,:teacher_id, :duration)";


        $order = $connection->prepare($query);
        $Flag = $order->execute([
            ':title' => $input['title'],
            ':description' => $input['description'],
            ':category_id' => $input['category_id'],
            ':price' => $input['price'],
            ':image' => $input['image'],
            ':teacher_id' => $input['teacher_id'],
            ':duration' => $input['duration'],
        ]);


        if ($Flag) echo json_encode(['message' => 'Course added Successfully']);
        else echo json_encode(['error' => 'Failed to add Course']);
    }
}
else if ($method==='PUT')
{
    if (!isset($input['course_id'])) 
    {
        http_response_code(400);
        echo json_encode(['error' => ' Course is not found']);
    }
    else
    {
        $query = "update courses set  title = :title, description = :description, price = :price , image = :image , duration = :duration , teacher_id = :teacher_id where is_deleted = 0 and course_id = :course_id";

        $order = $connection->prepare($query);
        $Flag = $order->execute([':course_id' => $input['course_id'],
            ':title' => $input['title'],
            ':description' => $input['description'],
            ':price' => $input['price'],
            ':image' => $input['image'],
            ':duration' => $input['duration'],
            ':teacher_id' => $input['teacher_id'],
        ]);
        if ($Flag) echo json_encode(['message' => ' Course is updated']);
        else echo json_encode(['error' => 'Failed to udpate the Course ']);
    }
}
else if ($method==='DELETE')
{
    if (!isset($input['course_id']))
    {
        http_response_code(400);
        echo json_encode(['error' => ' Course is not found']);
    }
    else
    {
        $order = $connection->prepare("update courses set is_deleted = 1 where course_id = :course_id");
        $flag = $order->execute([':course_id' => $input['course_id']]);
        if ($flag) echo json_encode(['message' => 'Course deleted']);
        else echo json_encode(['error' => 'Failed to delete Course']);
    }
}
