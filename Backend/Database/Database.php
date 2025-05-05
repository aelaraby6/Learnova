<?php

class Database{
    private $connection;
    protected $statment; // pdo statement
    public function __construct($config , $username = 'root' , $password = '123456'){
        $dsn = 'mysql:' . http_build_query($config , '' , ";");
        $this->connection = new PDO("$dsn" , $username , $password);
    }
    
    public function query($query , $thing = []){
        $this->statment = $this->connection->prepare($query);
        $this->statment->execute($thing);
        return $this;
    }
    
    public function fetchall(){
        return $this->statment->fetchAll(PDO::FETCH_ASSOC);
    }


    public function find(){
        return $this->statment->fetch();
    }

    public function FindorFail(){
        $res = $this->find();

        if(!$res){
            abort(404);
        }

        return $res;
    }

    public function authonticate($condition,$response = Response::forbidden){
        if(!$condition){
            abort($response);
        }
    }
}