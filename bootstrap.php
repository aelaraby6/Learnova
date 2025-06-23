<?php

use core\Container;
use core\Database;
use core\App;
use core\middleware\guest;
use core\middleware\Auth;
use core\middleware\middleware;

$container = new Container();


$container->bind("core\Database" , function(){
    $config = require base_path("config.php");
    return new Database($config['database']);
});


App::setcontainer($container);