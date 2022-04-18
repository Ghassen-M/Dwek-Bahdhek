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
        $file=mysqli_real_escape_string($con,$request->file);

        $ch=$nom." ".$prenom;
        $req="select * from  pharmacien where email_pharmacien='{$email}' ";
        $result=mysqli_query($con,$req);
        if (mysqli_num_rows($result)>0) 
        {
            echo "mawjoud";
            die();
        }
        $s="INSERT INTO `compte`(`email`,`username`,`dateN`,`photo`,`mdp`,`sexe`,`tel`,`valide`,`type`,`fichier`,`adr`) values('{$email}','{$ch}','{$dn}','../../assets/user-icon.png','{$mdp}','{$sexe}',{$tel},'non','Pharmacien','{$file}',null);";		        
        if (mysqli_query($con,$s)){}
        else{}

        $sq="INSERT INTO `pharmacien` (`email_pharmacien`,`cin_pharmacien`,`photo_pharmacien`,`username_pharmacien`,`dateN`,`sexe_pharmacien`,`tel_pharmacien`,`mdp_pharmacien`,`fichier_pharmacien`,`adr_pharmacie`) values('{$email}',{$cin},'../../assets/user-icon.png','{$ch}','{$dn}','{$sexe}',{$tel},'{$mdp}','{$file}',null);";
        if (mysqli_query($con,$sq))
        {}
        else
        {}

    }  
?>
