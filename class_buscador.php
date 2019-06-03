<?php
    include 'conexion.php';
        
    class Buscador {
        
        
        public $resul_busqueda;
        
        public function buscar_etiqueta(){
            $dbh = DatabaseHandler::getConnection();
            $stmt = $dbh->prepare("select e.nombre as netq, f.ruta as foto, f.etiqueta as etiquetaid from etiquetas as e, fotos as f where f.etiqueta=e.ID and e.nombre like ':resul_busqueda%'");
            $stmt->execute([":resul_busqueda" => $resul_busqueda]);
            
            if($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                return 1;
                
            }else{
                return 2;
            }
                
            $dbh = null;
        }
        
    }
?>