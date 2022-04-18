<?php
    require 'connect.php';
    $e=$_GET['email'];

    $sql  ="DELETE FROM `profil` WHERE `email`='{$e}';";
    $sql .="DELETE FROM `compte` WHERE `email`='{$e}';";
    if (mysqli_multi_query($con,$sql))
    {
    }
    else
    {
    }
?>

