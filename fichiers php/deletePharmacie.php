<?php
    require 'connect.php';
    $postdata=file_get_contents("php://input");
    if (isset($postdata) && !empty($postdata))
    {
    $request=json_decode($postdata);
    $adr=mysqli_real_escape_string($con,$request->adr);   
    $sql ="UPDATE `pharmacie` SET `nom_pharmacie`=NULL, `email_pharmacie`=NULL,`type_pharmacie`=NULL,`tel_pharmacie`=NULL  WHERE `adr_pharmacie`='$adr';";        
 
        if (mysqli_query($con,$sql))
        {
        }
        else
        {
        }
    }

?>