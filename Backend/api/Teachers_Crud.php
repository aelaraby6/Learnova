<?php

require_once('../Database/Database.php');

$input = json_decode(file_get_contents("php://input"), true); // استلام الطلب

$data = new Database() ; // الاتصال مع الداتا بيز
$connection = $data->connect();  // الارتباط مع الداتا بيز و كل الداتا ظاهرة دلوقتي

$method = $_SERVER['REQUEST_METHOD']; // معرفة نوع الطلب


if ($method==='GET') // عرض كل المدرسين
{
    $query = " select t1.teacher_id,t1.bio,t1.profile_picture,t1.facebook_link,t1.linkedin_link,t1.twitter_link,t2.user_id,t2.name,t2.email,t2.created_at from teacher t1
              JOIN user t2 ON t1.user_id = t2.user_id";  // used join to retrive - teacher's name and email

    $order = $connection->prepare($query);
    $order->execute();
    $teachers = $order->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($teachers);
    // تجهيز و تنفيذ الامر  ووضعه في اراي وارجاعه ك Json
}
else if ($method==='POST') // اضافة مدرس جديد
{
    if (!isset($input['user_id'])) // لو اليوزر مش موجود اصلا
    {
        http_response_code(400);
        echo json_encode(['error' => 'User ID is not found']);
    }
    else
    {
        $query = "INSERT INTO teacher (user_id, bio, profile_picture, facebook_link, linkedin_link, twitter_link)
                  VALUES (:user_id, :bio, :profile_picture, :facebook_link, :linkedin_link, :twitter_link)";


        $order = $connection->prepare($query);
        $Flag = $order->execute([':user_id' => $input['user_id'],
            ':bio' => $input['bio'],
            ':profile_picture' => $input['profile_picture'],
            ':facebook_link' => $input['facebook_link'],
            ':linkedin_link' => $input['linkedin_link'],
            ':twitter_link' => $input['twitter_link']
        ]);


        if ($Flag) echo json_encode(['message' => 'Teacher added Successfully']);
        else echo json_encode(['error' => 'Failed to add teacher']);
        // تجهيز و تنفيذ الامر  وارجاعه رسالة ك Json
    }
}
else if ($method==='PUT') // تعديل مدرس موجود
{
    if (!isset($input['teacher_id'])) // لو اليوزر مش موجود اصلا
    {
        http_response_code(400);
        echo json_encode(['error' => 'Teacher ID is not found']);
    }
    else
    {
        $query = "update teacher set bio = :bio, profile_picture = :profile_picture, facebook_link = :facebook_link, linkedin_link = :linkedin_link, twitter_link = :twitter_link
                  where teacher_id = :teacher_id";

        $order = $connection->prepare($query);
        $Flag = $order->execute([':teacher_id' => $input['teacher_id'],
            ':bio' => $input['bio'],
            ':profile_picture' => $input['profile_picture'],
            ':facebook_link' => $input['facebook_link'],
            ':linkedin_link' => $input['linkedin_link'],
            ':twitter_link' => $input['twitter_link']
        ]);
        if ($Flag) echo json_encode(['message' => ' the data of teacher is updated']);
        else echo json_encode(['error' => 'Failed to udpate date of the teacher']);
        // تجهيز و تنفيذ الامر  وارجاعه رسالة ك Json
    }
}
else if ($method === 'DELETE') // لحذف مدرس موجود
{
    if (!isset($input['teacher_id'])) // لو اليوزر مش موجود اصلا
    {
        http_response_code(400);
        echo json_encode(['error' => ' Teacher ID is not found']);
    }
    else
    {
        $order = $connection->prepare("delete from teacher where teacher_id = :teacher_id");
        $flag = $order->execute([':teacher_id' => $input['teacher_id']]);
        if ($flag) echo json_encode(['message' => 'Teacher deleted']);
        else echo json_encode(['error' => 'Failed to delete teacher']);
        // تجهيز و تنفيذ الامر  ووضعه في اراي وارجاعه رسالة ك Json
    }
}
?>