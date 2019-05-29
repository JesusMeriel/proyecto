<?php
    include 'conexion.php';
    session_start();
    if(isset($_SESSION["mail"])){
        $mail = $_SESSION["mail"];
        $dbh = DatabaseHandler::getConnection();
        $stmt = $dbh->prepare("SELECT nombre, apellido FROM usuarios WHERE correo = :mail");
        $stmt->execute([":mail" => $mail]);
        
        while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $nombre = $row['nombre'];
            echo $nombre;
        }
    }else{
        echo("<script>alert('Error! No has iniciado sesion')</script>");
        echo("<script>window.location = 'index.html';</script>");
    }
?>