DROP DATABASE IF EXISTS bamazon ;

CREATE DATABASE bamazon ;
 
USE bamazon ;

CREATE TABLE products (
    id INTEGER NOT NULL AUTO_INCREMENT,
    product_name  VARCHAR(100),
    department_name VARCHAR(100),
    price  INTEGER,
    stock_quantity  INTEGER,    
    PRIMARY KEY (id)
);

SELECT * FROM Top5000

