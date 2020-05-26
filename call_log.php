<?php
    include 'class_login.php';
    // echo $ej;
    // if(isset($_POST["nom"])){
    //     $nombre = $_POST['nom']; 
    //     $log = new Login();
    //     $res = $log -> comprueba_rol($nombre);
    //     echo $resffff;
    // }
    $nombre =$_POST['nom'];
    $log = new Login();
    $res = $log -> comprueba_rol($nombre);
    echo $res;
    
    
?>