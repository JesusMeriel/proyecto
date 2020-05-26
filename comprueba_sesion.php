<?php
    include 'class_login.php';

    if((isset($_POST['mail']))&&(isset($_POST['pass']))){
        $mail = $_POST['mail'];
        $pass = $_POST['pass'];
    	$log = new Login();
    	$res = $log -> comprueba_sesion($mail, $pass);
    	echo $res;
    }
?>