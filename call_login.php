<?php
    include 'login.php';
    
    $mail = $_POST['mail'];
    $pass = $_POST['pass'];
    if((isset($mail))&&(isset($pass))){
        $log = new Login();
        $res = $log -> comprobar_login($mail, $pass);
        echo $res; 
    }
    
?>