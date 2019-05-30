<?php
    include 'conexion.php';
    
        
    class Login {
    
        // Declaracion de una propiedad
        private $tipo = false;
        
        
        public $mail;
        public $password;
        
        public function comprobar_login($mail, $pass){
            $dbh = DatabaseHandler::getConnection();
            $stmt = $dbh->prepare("SELECT * FROM usuarios WHERE correo = :mail and password = :pass ");
            $stmt->execute([":mail" => $mail,":pass" => $pass]);
            
            if($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                return 1;
                session_start();
                $_SESSION["mail"] = $mail;
            }else{
                return 2;
            }
                
            $dbh = null;
            
        }
        
        
        public function close_sesion(){
            session_start();
            session_destroy();
        }
        
        public function comprueba_sesion(){
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
                $mail = $_SESSION["mail"];
                echo("<script>alert(". $mail .");</script>");
                echo("<script>window.location = 'index.html';</script>");
            }
        }
        
    }
        
?>