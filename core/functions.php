<?php

function isurl($value){
    return $value === parse_url($_SERVER['REQUEST_URI'])['path'];
}


function base_path($path){
    return BASE_PATH . $path;
}

function view($path , $attributes = []){

    extract($attributes);

    require base_path("views/" . $path);
    
}


function abort($code_status = 404){
    http_response_code($code_status);
    
    require base_path("views/{$code_status}.php");
    
    die();

}

function redirect($path){

    header("Location: {$path}");

    exit();
    
}