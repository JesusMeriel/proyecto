<?php
    include 'conexion.php';
    session_start();
        
    class Usuario {
        
        public $nombre;
        public $apellido;
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
        
        public function mail_duplicate($mail){
            $dbh = DatabaseHandler::getConnection();
            $stmt = $dbh->prepare("select * from usuarios where correo = :mail");
            $a = $stmt->execute([":mail" => $mail]);
            
            if($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                return 1;
                
            }else{
                return 2;
            }
        }
        
        public function insert_usuarios($nom, $ap, $mail, $pass){
            $res = $this -> mail_duplicate($mail);
            if($res == 2){
                $dbh = DatabaseHandler::getConnection();
                $stmt = $dbh->prepare("insert into usuarios (nombre, apellido, correo, password, rol) VALUES (:nom, :ap, :mail, :pass, :rol)");
                $a = $stmt->execute([":nom" => $nom,":ap" => $ap,":mail" => $mail,":pass" => $pass,":rol" => 0]);
                
                return $a;
            }else{
                return 2;
            }
            
            
                
            $dbh = null;
        }

        public function inf(){

            $inf = $_SESSION["mail"];
            $dbh = DatabaseHandler::getConnection();
            $stmt = $dbh->prepare("SELECT * FROM usuarios WHERE nombre = :inf ");
            $stmt->execute([":inf" => $inf]);
            
            if($row = $stmt->fetch(PDO::FETCH_ASSOC)) {

                echo $row['nombre'];
            }
          
                
        }


        public function comprobar_login($mail, $pass){
            $dbh = DatabaseHandler::getConnection();
            $stmt = $dbh->prepare("SELECT * FROM usuarios WHERE correo = :mail and password = :pass ");
            $stmt->execute([":mail" => $mail,":pass" => $pass]);
            
            if($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                $_SESSION["mail"] = $mail;
                echo '1';
            }else{
                echo '2';
            }
                
            $dbh = null;
            
        }
        
        public function comprueba_rol($nombre){
            
            $dbh = DatabaseHandler::getConnection();
            $stmt = $dbh->prepare("SELECT rol FROM usuarios WHERE nombre = :nombre");
            $stmt->execute([":nombre" => $nombre]);
            
            if($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                $rol = $row['rol'];
            }
            echo $rol;

        }
        
        public function close_sesion(){
            session_destroy();
        }
        
        public function comprueba_sesion($mail, $pass){
            
            $dbh = DatabaseHandler::getConnection();
            if(isset($_SESSION["mail"])){
                $mail = $_SESSION["mail"];
                $dbh = DatabaseHandler::getConnection();
                $stmt = $dbh->prepare("SELECT nombre FROM usuarios WHERE correo = :mail");
                $stmt->execute([":mail" => $mail]);
                
                while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                    $nombre = $row['nombre'];
                    echo $nombre;
                }
            }else{
                $mail = $_SESSION["mail"];
                echo("<script>window.location = 'index.html';</script>");
            }
        }

        public function subir_imagen($categoria, $descripcion, $fecha, $nombre, $url, $etiqueta, $etiqueta2){
            $dbh = DatabaseHandler::getConnection();
            $stmt = $dbh->prepare("SELECT idUsu FROM usuarios WHERE nombre = :nombre");
            $stmt->execute([":nombre" => $nombre]);
            
            while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                $id_Usu = 0;
                $id_Usu = $row['idUsu'];
                echo $id_Usu;
            }
            $stmt = $dbh->prepare("insert into imagenes (descripcion, fecha, url, Usuarios_idUsu, Categoria_idCategoria) VALUES (:descripcion, :fecha, :url, :id_Usu, :categoria)");

            $stmt->execute([":descripcion" => $descripcion,":fecha" => $fecha,":url" => $url,":id_Usu" => $id_Usu,":categoria" => $categoria]);
           
            
            echo "perfecto";
                
            $dbh = null;
            
        }
        
    }
        
?>