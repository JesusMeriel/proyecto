<?php
    include 'class_usuario.php';
    // echo $ej;
    // if(isset($_POST["nom"])){
    //     $nombre = $_POST['nom']; 
    //     $log = new Login();
    //     $res = $log -> comprueba_rol($nombre);
    //     echo $resffff;
    // }
    $nombre =$_POST['nom'];
    $log = new Usuario();
    $res = $log -> comprueba_rol($nombre);
    echo $res;
    
    
?>