<?php
    require 'connect.php';
    $pharmacies=[];
    $nomC=$_GET['med'];
    $sql="SELECT p.nom_pharmacie,p.type_pharmacie,p.tel_pharmacie,p.adr_pharmacie,m.quantité FROM pharmacie p,médicament m where m.adr_pharmacie=p.adr_pharmacie AND m.nom_commercial='{$nomC}';";
    if ($result= mysqli_query($con,$sql))
    {
        $cr=0;
        while($row=mysqli_fetch_assoc($result))
        {
            $pharmacies[$cr]['nom_pharmacie']=$row['nom_pharmacie'];
            $pharmacies[$cr]['type_pharmacie']=$row['type_pharmacie'];
            $pharmacies[$cr]['tel_pharmacie']=$row['tel_pharmacie'];
            $pharmacies[$cr]['adr_pharmacie']=$row['adr_pharmacie'];
            $pharmacies[$cr]['quantite']=$row['quantité'];
            $cr++;
        }
        echo json_encode($pharmacies);
    }
    else
    {
        http_response_code(404);
    }
?>