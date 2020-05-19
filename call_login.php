<?php
    include 'class_login.php';
    
    $mail = $_POST['mail'];
    $pass = $_POST['pass'];
    // $mail = "jesusmeriel@gmail.com";
    // $pass = "P@ssw0rd";
    if((isset($mail))&&(isset($pass))){
        $log = new Login();
        $res = $log -> comprobar_login($mail, $pass);
        echo $res; 
    }
    $nombre = $_POST['nombre'];
    if(isset($nombre)){
        $log = new Login();
        $res = $log -> comprueba_rol($nombre);
        echo $res;
    }
    
?>