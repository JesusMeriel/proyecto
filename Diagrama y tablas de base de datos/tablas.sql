-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Table `Usuarios`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Usuarios` ;

CREATE TABLE IF NOT EXISTS `Usuarios` (
  `idUsu` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  `apellido` VARCHAR(45) NULL,
  `correo` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `rol` TINYINT NULL,
  PRIMARY KEY (`idUsu`));


-- -----------------------------------------------------
-- Table `Categoria`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Categoria` ;

CREATE TABLE IF NOT EXISTS `Categoria` (
  `idCategoria` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  PRIMARY KEY (`idCategoria`));


-- -----------------------------------------------------
-- Table `Imagenes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Imagenes` ;

CREATE TABLE IF NOT EXISTS `Imagenes` (
  `idImagenes` INT NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(45) NULL,
  `fecha` DATE NULL,
  `cfcategoria` INT NULL,
  `nombre` VARCHAR(45) NULL,
  `comentario` VARCHAR(45) NULL,
  `Usuarios_idUsu` INT NOT NULL,
  `Categoria_idCategoria` INT NOT NULL,
  PRIMARY KEY (`idImagenes`));


-- -----------------------------------------------------
-- Table `Etiqueta`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Etiqueta` ;

CREATE TABLE IF NOT EXISTS `Etiqueta` (
  `idEtiqueta` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  PRIMARY KEY (`idEtiqueta`));


-- -----------------------------------------------------
-- Table `Imagenes_has_Etiqueta`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Imagenes_has_Etiqueta` ;

CREATE TABLE IF NOT EXISTS `Imagenes_has_Etiqueta` (
  `Imagenes_idImagenes` INT NOT NULL,
  `Etiqueta_idEtiqueta` INT NOT NULL,
  PRIMARY KEY (`Imagenes_idImagenes`, `Etiqueta_idEtiqueta`);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
