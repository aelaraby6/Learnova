<?php

require_once('../Database/Database.php');

$input = json_decode(file_get_contents("php://input"), true); // استلام الطلب

$data = new Database() ; // الاتصال مع الداتا بيز
$connection = $data->connect();  // الارتباط مع الداتا بيز و كل الداتا ظاهرة دلوقتي

$method = $_SERVER['REQUEST_METHOD']; // معرفة نوع الطلب


if ($method==='GET') // عرض كل المدرسين
{
    $query = " SELECT t.teacher_id, t.bio, t.profile_picture, t.facebook_link, t.linkedin_link, t.twitter_link, u.user_id, u.name, u.email, u.created_at FROM teacher t
              JOIN user u ON u.user_id = t.user_id";

    $order = $connection->prepare($query);
    $order->execute();
    $teachers = $order->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($teachers);
}
else if ($method==='POST')
{
    if (!isset($input['user_id']))
    {
        http_response_code(400);
        echo json_encode(['error' => ' User ID is not found ']);
    }
    else
    {
        $query = "INSERT INTO teacher (user_id, bio, profile_picture, facebook_link, linkedin_link, twitter_link)
                  VALUES (:user_id, :bio, :profile_picture, :facebook_link, :linkedin_link, :twitter_link)";


        $order = $connection->prepare($query);
        $order->bindParam(':user_id', $input['user_id']);
        $order->bindParam(':bio', $input['bio']);
        $order->bindParam(':profile_picture', $input['profile_picture']);
        $order->bindParam(':facebook_link', $input['facebook_link']);
        $order->bindParam(':linkedin_link', $input['linkedin_link']);
        $order->bindParam(':twitter_link', $input['twitter_link']);


        if ($order->execute()) echo json_encode(['message' => 'Teacher added Successfully']);
        else echo json_encode(['error' => 'Failed to add teacher']);
    }
}
else if ($method==='PUT')
{
    if (!isset($input['teacher_id']))
    {
        http_response_code(400);
        echo json_encode(['error' => 'Teacher ID is not found']);
    }
    else
    {
        $query = "UPDATE teacher SET bio = :bio, profile_picture = :profile_picture, facebook_link = :facebook_link, linkedin_link = :linkedin_link, twitter_link = :twitter_link
                  WHERE teacher_id = :teacher_id";


        $order = $connection->prepare($query);
        $order->bindParam(':teacher_id', $input['teacher_id']);
        $order->bindParam(':bio', $input['bio']);
        $order->bindParam(':profile_picture', $input['profile_picture']);
        $order->bindParam(':facebook_link', $input['facebook_link']);
        $order->bindParam(':linkedin_link', $input['linkedin_link']);
        $order->bindParam(':twitter_link', $input['twitter_link']);

        if ($order->execute())  echo json_encode(['message' => ' the data of teacher is updated']);
        else echo json_encode(['error' => 'Failed to udpate date of the teacher']);
    }
}
else if ($method === 'DELETE')
{
    if (!isset($input['teacher_id']))
    {
        http_response_code(400);
        echo json_encode(['error' => ' Teacher ID is not found']);
    }
    else
    {
        $order = $connection->prepare("DELETE FROM teacher WHERE teacher_id = :teacher_id");

        $order->bindParam(':teacher_id', $input['teacher_id']);
        if ($order->execute())  echo json_encode(['message' => 'Teacher deleted']);
        else echo json_encode(['error' => 'Failed to delete teacher']);
    }
}
?>