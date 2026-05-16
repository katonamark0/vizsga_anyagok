DROP DATABASE IF EXISTS cars;
CREATE DATABASE cars
CHARACTER SET utf8mb4
COLLATE utf8mb4_hungarian_ci;
USE cars;


CREATE TABLE countries (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL COMMENT 'Ország neve',
    PRIMARY KEY (id)
) COMMENT='Országok';


CREATE TABLE categories (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL COMMENT 'Kategória neve',
    PRIMARY KEY (id)
) COMMENT='Autó kategóriák';


CREATE TABLE colors (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL COMMENT 'Szín neve',
    PRIMARY KEY (id)
) COMMENT='Autó színek';


CREATE TABLE fuel_types (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL COMMENT 'Üzemanyag típus neve',
    PRIMARY KEY (id)
) COMMENT='Üzemanyag típusok';





CREATE TABLE brands (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL COMMENT 'Márka neve',
    country_id INT UNSIGNED NOT NULL COMMENT 'Származási ország',
    founded_year INT COMMENT 'Alapítás éve',
    PRIMARY KEY (id),
    CONSTRAINT fk_brands_country
        FOREIGN KEY (country_id)
        REFERENCES countries(id)
) COMMENT='Autó márkák';



CREATE TABLE models (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    brand_id INT UNSIGNED NOT NULL COMMENT 'Márka azonosító',
    name VARCHAR(50) NOT NULL COMMENT 'Típus neve',
    category_id INT UNSIGNED NOT NULL COMMENT 'Kategória',
    production_start INT COMMENT 'Gyártás kezdete (év)',
    production_end INT COMMENT 'Gyártás vége (év), NULL ha még gyártják',
    PRIMARY KEY (id),
    CONSTRAINT fk_models_brand
        FOREIGN KEY (brand_id)
        REFERENCES brands(id),
    CONSTRAINT fk_models_category
        FOREIGN KEY (category_id)
        REFERENCES categories(id)
) COMMENT='Autó típusok';



CREATE TABLE cars (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    model_id INT UNSIGNED NOT NULL COMMENT 'Típus azonosító',
    license_plate VARCHAR(10) NOT NULL UNIQUE COMMENT 'Rendszám',
    color_id INT UNSIGNED NOT NULL COMMENT 'Szín',
    year INT NOT NULL COMMENT 'Gyártási év',
    mileage INT DEFAULT 0 COMMENT 'Futott km',
    price INT COMMENT 'Ár (Ft)',
    fuel_type_id INT UNSIGNED NOT NULL COMMENT 'Üzemanyag típus',
    engine_capacity INT COMMENT 'Hengerűrtartalom (cm3)',
    horsepower INT COMMENT 'Teljesítmény (LE)',
    purchase_date DATE COMMENT 'Vásárlás dátuma',
    mot_expiry DATE COMMENT 'Forgalmi érvényessége',
    PRIMARY KEY (id),
    CONSTRAINT fk_cars_model
        FOREIGN KEY (model_id)
        REFERENCES models(id),
    CONSTRAINT fk_cars_color
        FOREIGN KEY (color_id)
        REFERENCES colors(id),
    CONSTRAINT fk_cars_fuel_type
        FOREIGN KEY (fuel_type_id)
        REFERENCES fuel_types(id)
) COMMENT='Konkrét autók';
