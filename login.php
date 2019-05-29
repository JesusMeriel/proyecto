<?php
    
    include 'conexion.php';
    
    $mail = $_POST['mail'];
    $pass = $_POST['pass'];
    //$stmt->execute();
    $dbh = DatabaseHandler::getConnection();
    $stmt = $dbh->prepare("SELECT * FROM usuarios WHERE correo = :mail and password = :pass ");
    $stmt->execute([":mail" => $mail,":pass" => $pass]);
       
    if($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        echo 1;
        session_start();
        $_SESSION["mail"] = $mail;
    }else{
        echo 2;
    }
    ///gardamos el nombre del usuario
        
    $dbh = null;
?>