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