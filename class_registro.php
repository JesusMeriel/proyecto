<?php
    include 'conexion.php';
    session_start();
        
    class Registro {
        
        public $nombre;
        public $apellido;
        public $mail;
        public $password;
        
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
        
        
    }
?>