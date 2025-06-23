<?php

use core\Database;
use core\Router;
use core\validator;
use core\middleware\guest;
use core\middleware\Auth;
use core\middleware\middleware;

session_start();


const BASE_PATH = __DIR__ . "/../";
require BASE_PATH ."core/functions.php";


spl_autoload_register(function($class) {
    $class = str_replace('\\' , '/' , $class);
    require base_path("{$class}.php");
});

require base_path("bootstrap.php");

$url = parse_url($_SERVER["REQUEST_URI"])['path'];

$router = new Router();

require base_path("routes.php");

$method =  $_POST['_method'] ?? $_SERVER['REQUEST_METHOD'];

$router->route($url , $method);