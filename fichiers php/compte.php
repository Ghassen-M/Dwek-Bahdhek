<?php
    require 'connect.php';
    $email=$_GET['email'];
    $sql="SELECT username,dateN,photo,mdp,tel,email,sexe,adr FROM compte where email='$email';";
    $result= mysqli_query($con,$sql);
    $row=mysqli_fetch_assoc($result);
    echo $json=json_encode($row);
    exit;
?>