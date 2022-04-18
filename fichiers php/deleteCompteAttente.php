<?php
    require 'connect.php';
    $e=$_GET['email'];

    $sql="DELETE FROM `compte` WHERE `email`='{$e}'";
    if (mysqli_query($con,$sql))
    {
	http_response_code(204);
    }
    else
    {
        http_response_code(404);
    }
?>