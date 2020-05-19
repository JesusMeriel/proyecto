<?php
    include 'class_usuario.php';
   
    $mail = $_POST['mail'];
    // $nombre = "joel";
    if(isset($mail)){
        $log = new Usuario();
        $res = $log -> eliminar_usuario($mail);
        echo $res;
    }
    
?>