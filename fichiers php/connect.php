<?php
    define('DB_HOST', 'localhost:3306');
    define('DB_USER', 'root');
    define('DB_PASS', '');
    define('DB_NAME', 'dwek_bahdhek');

    function connect()
    {
        $connect=mysqli_connect(DB_HOST,DB_USER,DB_PASS,DB_NAME);


        mysqli_set_charset($connect,"utf8");
        return $connect;
    }

    $con=connect();
?>