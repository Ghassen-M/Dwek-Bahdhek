<?php
    require 'connect.php';
	$nom=$_POST['nom'];
	$prenom=$_POST['prenom'];
	$cin=$_POST['cin'];
	$email=$_POST['email'];
	$mdp=$_POST['mdp'];
	$tel=$_POST['tel'];
	$sexe=$_POST['sexe'];
	$dn=$_POST['dn'];
	
	$ch=$nom+$prenom;
	$req="select * from  client where email=$email ";
	$res=mysql_query($req);
	if (mysql_num_rows($res)>0) 
    {
		echo "mawjoud";
	    die();
    }
	$req="INSERT INTO compte ('email','username','dateN','mdp','sexe','tel','valide') values('$email','$ch','$dn','$mdp','$sexe',$tel,'oui')";		
	$res=mysql_query($req);
    $req1="INSERT INTO client ('email_clt','cin_clt','photo_clt','username_clt','dateN_clt','sexe_clt','tel_clt','mdp_clt','lieu_clt') values('$email',$cin,,'$ch','$dn','$sexe',$tel,'$mdp','$file','$spec')";
	$res1=mysql_query($req1);
	if(mysql_affected_rows()>0)
        {
	    echo "ajout avec succées ";
        }
    