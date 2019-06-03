<?php
    include 'conexion.php';
    session_start();
        
    class Login {
        
        
        public $mail;
        public $pass;
        
        public function comprobar_login($mail, $pass){
            $dbh = DatabaseHandler::getConnection();
            $stmt = $dbh->prepare("SELECT * FROM usuarios WHERE correo = :mail and password = :pass ");
            $stmt->execute([":mail" => $mail,":pass" => $pass]);
            
            if($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                $_SESSION["mail"] = $mail;
                return 1;
                
            }else{
                return 2;
            }
                
            $dbh = null;
            
        }
        
        
        public function close_sesion(){
            session_destroy();
        }
        
        public function comprueba_sesion($mail, $pass){
            
            $dbh = DatabaseHandler::getConnection();
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
                $mail = $_SESSION["mail"];
                echo("<script>window.location = 'index.html';</script>");
            }
        }
        
    }
        
?>