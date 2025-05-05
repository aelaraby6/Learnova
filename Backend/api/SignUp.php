<?php
require "header.php";
require "../Database/init_DB.php";

$data = json_decode(file_get_contents("php://input") , true);

$name     = $data['name'] ?? '';
$email    = $data['email'] ?? '';
$role     = $data['role'] ?? 'student';
$password = $data['password'] ?? '';

if(!$name || !$password || !$email){
    echo json_encode(['error' => 'All fileds are requierd.']);
    exit;
}

$Query = 'SELECT * FROM user WHERE email = ?';

$check_exist = $dbh->query($Query , [$email])->find();

if($check_exist){
    echo json_encode(['error' => 'Email already exist.']);
    exit;
}

$hashPassword = password_hash($password , PASSWORD_DEFAULT);

$insertion = 'INSERT INTO user(name , email , password , role , is_deleted) VALUES (? , ? , ? , ? , FALSE)';

$dbh->query($insertion , [$name , $email , $hashPassword , $role]);

echo json_encode(['message' => 'Signup succesful']);