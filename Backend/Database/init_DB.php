<?php
require "Database.php";
$config = require ("config.php");
$dbh = new Database($config['database']);