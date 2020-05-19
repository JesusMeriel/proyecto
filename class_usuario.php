<?php
    include 'conexion.php';
    session_start();
        
    class Usuario {
        
        
        public $mail;
        public $pass;
        
        
        public function administrar_cuentas(){
            $dbh = DatabaseHandler::getConnection();
            $stmt = $dbh->prepare("SELECT * FROM usuarios");
            $stmt->execute();
            $cont = 0;
            //
            $div = $div ."<div class='jodr'>";
            $tabla = $tabla ."<div class='divT'>";
            $tabla = $tabla ."<table class='tablaU'><tr><th class='bordes'>Nombre</th><th class='bordes'>Apellido</th><th class='bordes'>Correo</th><th class='bordes'>Borrar</th></tr>";
            while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                if($cont>0){
                    $nombre = $row['nombre'];
                    $apellido = $row['apellido'];
                    $mail = $row['correo'];
                    $tabla = $tabla ."<tr class='bordes2'><td>$nombre</td><td>$apellido</td><td>$mail</td><td class='removeicon' id='$mail'><i class='far fa-trash-alt fa-2x'></i></td></tr>";
                }
                $cont++;
            }
            $tabla = $tabla ."</table></div>";
            //$tabla = $tabla ."hola";
            return $tabla;
        }
        
        public function eliminar_usuario($mail){
            $dbh = DatabaseHandler::getConnection();
            $stmt = $dbh->prepare("delete FROM usuarios where correo = :mail");
            $stmt->execute([":mail" => $mail]);
           
            return 1;
        }
        
        
    }
        
?>