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


        <?php
        require 'connect.php';
        $postdata=file_get_contents("php://input");
        if (isset($postdata) && !empty($postdata))
        {
            $request=json_decode($postdata);
            $nom=mysqli_real_escape_string($con,$request->nom);
            $prenom=mysqli_real_escape_string($con,$request->prenom);
            $cin=mysqli_real_escape_string($con,$request->cin);
            $mdp=mysqli_real_escape_string($con,$request->mdp);
            $email=mysqli_real_escape_string($con,$request->email);
            $tel=mysqli_real_escape_string($con,$request->tel);
            $sexe=mysqli_real_escape_string($con,$request->sexe);
            $dn=mysqli_real_escape_string($con,$request->dn);

            $ch=$nom." ".$prenom;

            $req="select * from  client where email_clt='$email'";
    
            $result=mysqli_query($con,$req);
            if (mysqli_num_rows($result)>0) 
            {
                echo "mawjoud";
                die();
            }
            $s="INSERT INTO `compte`(`email`,`username`,`dateN`,`photo`,`mdp`,`sexe`,`tel`,`valide`,`type`,`fichier`,`adr`) values('{$email}','{$ch}','{$dn}','../../assets/user-icon.png','{$mdp}','{$sexe}',{$tel},'oui','client',null,null);";		        
            $sq ="INSERT INTO  `client`(`email_clt`,`cin_clt`,`photo_clt`,`username_clt`,`dateN_clt`,`sexe_clt`,`tel_clt`,`mdp_clt`,`lieu_clt`) values('{$email}',{$cin},'../../assets/user-icon.png','{$ch}','{$dn}','{$sexe}',{$tel},'{$mdp}',null);";
            $sql ="INSERT INTO `profil`(`email`,`mdp`) values('{$email}','{$mdp}');";    
            if (mysqli_query($con,$s))
            {
            }
            else
            {
            }
            if (mysqli_query($con,$sq))
            {
            }
            else
            {
            }
            if (mysqli_query($con,$sql))
            {
            }
            else
            {
            }
        }
    
    ?>