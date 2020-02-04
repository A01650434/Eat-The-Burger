CREATE DATABASE burgers_db;
USE burgers_db;

DROP TABLE IF EXISTS burgers; 

CREATE TABLE burgers(
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN, 
    date TIMESTAMP);