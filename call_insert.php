<?php
    include 'class_usuario.php';
    
    $nom = $_POST['nombre'];
    $ap = $_POST['apellido'];
    $mail = $_POST['mail'];
    $pass = $_POST['pass'];
    if((isset($mail))&&(isset($pass))&&(isset($nom))&&(isset($ap))){
        $reg = new Usuario();
        $res = $reg -> insert_usuarios($nom, $ap, $mail, $pass);
        echo $res; 
    }
?>
