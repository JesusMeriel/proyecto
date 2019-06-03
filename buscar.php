<?php
    include 'class_buscador.php';
    
    $resul_buqueda = $_POST['resul_buqueda'];
    if(isset($resul_buqueda)){
        $log = new Buscador();
        $res = $log -> buscar_etiqueta($resul_buqueda);
        echo $res; 
    }
?>