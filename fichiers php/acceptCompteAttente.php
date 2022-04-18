<?php
    require 'connect.php';
    $postdata=file_get_contents("php://input");
    if (isset($postdata) && !empty($postdata))
    {
        $request=json_decode($postdata);
        $email=mysqli_real_escape_string($con,$request->email);
        $mdp=mysqli_real_escape_string($con,$request->mdp);
        
        $sql="UPDATE `compte` SET `valide`='oui'  WHERE `email`='{$email}';";
	    $sql .="INSERT INTO `profil` (`email`,`mdp`) VALUES ('{$email}','{$mdp}');";
        if (mysqli_multi_query($con,$sql))
        {
        }
        else
        {
        }
    }

?>