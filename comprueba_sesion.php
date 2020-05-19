<?php
    include 'class_login.php';
    $mail = $_POST['mail'];
    $pass = $_POST['pass'];
    $log = new Login();
    $res = $log -> comprueba_sesion($mail, $pass);
    echo $res;
?>