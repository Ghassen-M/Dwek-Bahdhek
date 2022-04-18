<?php
    require 'connect.php';
    $email_pharmacien=$_GET['email'];
    $sql="SELECT nom_pharmacie,adr_pharmacie,type_pharmacie,email_pharmacie,tel_pharmacie FROM pharmacie where adr_pharmacie=(SELECT adr_pharmacie from pharmacien where email_pharmacien='$email_pharmacien');";
    $result= mysqli_query($con,$sql);
    $row=mysqli_fetch_assoc($result);
    echo $json=json_encode($row);
    exit;
?>