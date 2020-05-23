<?php

  class DatabaseHandler {
    const DATABASE_HOST    = "localhost";
    const DATABASE_USER    = "root";
    const DATABASE_PASS    = "";
    const DATABASE_DBNAME  = "merielje_pagina";
    const DATABASE_CHARSET = "utf8";

    // Returns the PDO connection to the database
    static function getConnection() {
      return new PDO("mysql:host=" . DatabaseHandler::DATABASE_HOST . ";dbname=" . DatabaseHandler::DATABASE_DBNAME . ";charset=" . DatabaseHandler::DATABASE_CHARSET, DatabaseHandler::DATABASE_USER, DatabaseHandler::DATABASE_PASS);
    }
  }
    
?>