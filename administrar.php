<?php
    include 'class_usuario.php';
    $log = new Usuario();
    $res = $log -> administrar_cuentas();
    echo $res;
?>