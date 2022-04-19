<?php
    	require 'connect.php';
$postdata=file_get_contents("php://input");
    if (isset($postdata) && !empty($postdata))
    {
        $request=json_decode($postdata);
        $email=mysqli_real_escape_string($con,$request->email);
        $mdp=mysqli_real_escape_string($con,$request->mdp);
	$query = mysqli_query($con, "select * from compte where mdp='{$mdp}' and email='{$email}'");
	$row = mysqli_num_rows($query);
	if($row ==1 )
		header('location:accueilCl.php');
	else
	{
		$_SESSION['statut']="Données éronnés mot de passe ou email";
        	header('location: Accueil.php');
		
	}
		
	
    }


		

?>
	

