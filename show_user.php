<?php
    // include 'class_usuario.php';
    include 'conexion.php';


    // $nombre = "ee";
    if(isset($_POST['nombre'])){
        $nombre = $_POST['nombre'];
        $dbh = DatabaseHandler::getConnection();
        $stmt = $dbh->prepare("SELECT idUsu FROM usuarios where nombre = :nombre");
        $stmt->execute([":nombre" => $nombre]);
        while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $id = $row['idUsu'];
        }

        $dbh = DatabaseHandler::getConnection();
        $stmt = $dbh->prepare("SELECT url FROM imagenes where Usuarios_idUsu = :id");
        $stmt->execute([":id" => $id]);
        $json = array();
        while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $url = $row['url'];
            $img = "<img class='imagen' src='". $url ."'>";
            array_push($json, $img);
        }

        header('Content-type: application/json; charset=utf-8');
        echo json_encode($json,JSON_FORCE_OBJECT);  
    }else{
        echo "mal";
    }
    
    
?>