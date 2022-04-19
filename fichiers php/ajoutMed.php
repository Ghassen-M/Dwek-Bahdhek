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
        $specialite=mysqli_real_escape_string($con,$request->specialite);

        $ch=$nom." ".$prenom;
        $req="select * from  médecin where email_medecin='{$email}' ";
        $result=mysqli_query($con,$req);
        if (mysqli_num_rows($result)>0) 
        {
            echo "mawjoud";
            die();
        }
        $s="INSERT INTO `compte`(`email`,`username`,`dateN`,`photo`,`mdp`,`sexe`,`tel`,`valide`,`type`,`fichier`,`adr`) values('{$email}','{$ch}','{$dn}','../../assets/user-icon.png','{$mdp}','{$sexe}',{$tel},'non','Médecin','{$file}',null);";		        
        if (mysqli_query($con,$s)){}
        else{}

        $sq="INSERT INTO `médecin` (`email_medecin`,`cin_medecin`,`photo_medecin`,`username_medecin`,`dateN`,`sexe_medecin`,`tel_medecin`,`mdp_medecin`,`fichier_medecin`,`specialite_medecin`) values('{$email}',{$cin},'../../assets/user-icon.png','{$ch}','{$dn}','{$sexe}',{$tel},'{$mdp}','{$file}','{$specialite}');";
        if (mysqli_query($con,$sq))
        {}
        else
        {}

    }  
?>