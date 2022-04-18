<?php
    require 'connect.php';
    $postdata=file_get_contents("php://input");
    if (isset($postdata) && !empty($postdata))
    {
        $request=json_decode($postdata);
        $nom_pharmacie=mysqli_real_escape_string($con,$request->nom_pharmacie);
        $adr_pharmacie=mysqli_real_escape_string($con,$request->adr_pharmacie);
        $email_pharmacie=mysqli_real_escape_string($con,$request->email_pharmacie);
        $type_pharmacie=mysqli_real_escape_string($con,$request->type_pharmacie);
        $tel_pharmacie=mysqli_real_escape_string($con,$request->tel_pharmacie);

        $ancienAdr=mysqli_real_escape_string($con,$request->ancienAdr);


        $sql ="UPDATE `pharmacie` SET `nom_pharmacie`='$nom_pharmacie', `adr_pharmacie`='$adr_pharmacie',`email_pharmacie`='$email_pharmacie',`type_pharmacie`='$type_pharmacie',`tel_pharmacie`='$tel_pharmacie'  WHERE `adr_pharmacie`='$ancienAdr';";        
 
        if (mysqli_query($con,$sql))
        {
        }
        else
        {
        }
    }

?>