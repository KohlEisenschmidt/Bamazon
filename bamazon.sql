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

SELECT * FROM products

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("ball", "sport", 5, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("bat", "sport", 10, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("cup", "kitchen", 5, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("spoon", "kitchen", 7, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("soap", "bath", 2, 20);

-- INSERT INTO Top5000 (artistName, songName, releseYear, worldRating,
--             USRating, UKRating, europeRating, restofworldRating)
-- VALUES("Bing Crosby", "White Christmas",
--  1942, 39.903, 23.929, 5.7, 2.185, 0.54  
-- );