<?php
    require 'connect.php';
    $postdata=file_get_contents("php://input");
    if (isset($postdata) && !empty($postdata))
    {
        $request=json_decode($postdata);
        $email=mysqli_real_escape_string($con,$request->email);
        $username=mysqli_real_escape_string($con,$request->username);
        $dateN=mysqli_real_escape_string($con,$request->dateN);
        $photo=mysqli_real_escape_string($con,$request->photo);
        $sexe=mysqli_real_escape_string($con,$request->sexe);
        $tel=mysqli_real_escape_string($con,$request->tel);
        $adr=mysqli_real_escape_string($con,$request->adr);
        $mdp=mysqli_real_escape_string($con,$request->mdp)       
        
        
        $ancienEmail=mysqli_real_escape_string($con,$request->ancienEmail);

     
        $sql ="UPDATE `compte` SET `email`='$email', `username`='$username',`dateN`= '$dateN', `photo`= '$photo', `sexe`='$sexe', `tel`='$tel',`adr`='$adr',`mdp`='$mdp'  WHERE `email`='$ancienEmail';";
        if (mysqli_query($con,$sql))
        {
        }
        else
        {
        }
    }

?>