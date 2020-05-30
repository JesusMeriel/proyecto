<?php
    include 'class_usuario.php';

    if((isset($_POST['mail']))&&(isset($_POST['pass']))){
        $mail = $_POST['mail'];
        $pass = $_POST['pass'];
    	$log = new Usuario();
    	$res = $log -> comprueba_sesion($mail, $pass);
    	echo $res;
    }
?>