<?php
    include 'class_usuario.php';
    
   
    
    if((isset($_POST['categoria']))&&(isset($_POST['descripcion']))&&(isset($_POST['fecha']))&&(isset($_POST['nombre']))&&(isset($_POST['url']))||(isset($_POST['etiqueta']))||(isset($_POST['etiqueta2']))){

        $categoria = $_POST['categoria'];
        $descripcion = $_POST['descripcion'];
        $fecha = $_POST['fecha'];
        $nombre = $_POST['nombre'];
        $url = $_POST['url'];
        $etiqueta = $_POST['etiqueta'];
        $etiqueta2 = $_POST['etiqueta2'];

        $log = new Usuario();
        $res = $log -> subir_imagen($categoria, $descripcion, $fecha, $nombre, $url, $etiqueta, $etiqueta2);
        // $res = "categoria: ". $categoria ." descripcion: ". $descripcion ." fecha: ". $fecha ." url: ". $url ." nombre:". $nombre ." etiqueta: ". $etiqueta . " etiqueta2: ". $etiqueta2;
        echo $res; 
    }
    
    
   
    
?>