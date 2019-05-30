<?php
    include 'login.php';
    
    $log = new Login();
    $res = $log -> comprueba_sesion();
    echo $res;
?>