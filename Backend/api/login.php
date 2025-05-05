<?php
require "header.php";
require "../Database/init_DB.php";

$data = json_decode(file_get_contents("php://input") , true);


$email = $data['email'] ?? '';
$password = $data['password'] ?? '';

if(!$email || !$password){
    echo json_encode(['error' => 'Email and password are required.']);
    exit;
}
  

$request = 'SELECT * FROM user WHERE email = ? and password = ? ';

$user = $dbh->$query($request , [$email , $password]);

if(!$user || !password_verify($password , $user['password'])){
    echo json_encode(['error' => 'Invalid email or password']);
    exit;
}

echo json_encode([
    'message' => 'Login succesful',
    'user' => [
    'name' => $user['name'],
    'email' => $user['email'],
    'role' => $user['role']
    ]
]);