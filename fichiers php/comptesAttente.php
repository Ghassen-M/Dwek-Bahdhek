<?php
    require 'connect.php';
    error_reporting(E_ERROR);
    $comptesAttente=[];
    $sql="SELECT username,tel,email,fichier,mdp,type FROM compte where valide='non' and (type='Médecin' or type='Pharmacien');";
    if ($result= mysqli_query($con,$sql))
    {
        $cr=0;
        while($row=mysqli_fetch_assoc($result))
        {
            $comptesAttente[$cr]['username']=$row['username'];
            $comptesAttente[$cr]['tel']=$row['tel'];
            $comptesAttente[$cr]['email']=$row['email'];
            $comptesAttente[$cr]['mdp']=$row['mdp'];
            $comptesAttente[$cr]['fichier']=$row['fichier'];
	    $comptesAttente[$cr]['type']=$row['type'];
            $cr++;
        }
        echo json_encode($comptesAttente);
    }
    else
    {
        http_response_code(404);
    }
?>