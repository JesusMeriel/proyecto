<?php
    include 'class_usuario.php';
    $dbh = DatabaseHandler::getConnection();
    $stmt = $dbh->prepare("SELECT url FROM imagenes");
    $stmt->execute();
    $json = array();
    while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $url = $row['url'];
       	$img = "<img class='imagen' src='". $url ."'>";
        array_push($json, $img);
    }

    header('Content-type: application/json; charset=utf-8');
    echo json_encode($json,JSON_FORCE_OBJECT);
    
?>