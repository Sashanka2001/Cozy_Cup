CREATE DATABASE Cozy_Cup;
USE Cozy_Cup;
DROP DATABASE IF EXISTS Cozy_Cup;

CREATE TABLE Categories (
    Category_ID VARCHAR(10) PRIMARY KEY,
    Category_Name VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO Categories VALUES ('C1','Food');
INSERT INTO Categories VALUES ('C2','Desserts');
INSERT INTO Categories VALUES ('C3','Beverages');

select *from Categories order by Category_ID;

#Read the categories
SELECT * FROM Categories WHERE Category_ID = 'C1';  
SELECT * FROM Categories WHERE Category_ID = 'C2';
SELECT * FROM Categories WHERE Category_ID = 'C3';

/*DESCRIBE Categories;*/
/*DROP TABLE Categories;*/

CREATE TABLE Products (
    Product_ID INT PRIMARY KEY AUTO_INCREMENT,
    Product_Name VARCHAR(100) NOT NULL,
    Price DECIMAL(10,2)  NOT NULL,
    Category_ID VARCHAR(10) NOT NULL,
	foreign key (Category_ID) references Categories(Category_ID)ON DELETE CASCADE ON UPDATE CASCADE
);

/*Food*/
INSERT INTO Products VALUES ((Product_ID),'Garlic bread',500.00, 'C1');
INSERT INTO Products VALUES ((Product_ID),'Croissant',300.00, 'C1');
INSERT INTO Products VALUES ((Product_ID),'Sandwitch',700.00, 'C1');
INSERT INTO Products VALUES ((Product_ID),'Burger',1000.00, 'C1');

/*Desserts*/
INSERT INTO Products VALUES ((Product_ID),'Browinie',500.00, 'C2');
INSERT INTO Products VALUES ((Product_ID),'Muffine',200.00, 'C2');
INSERT INTO Products VALUES ((Product_ID),'Red velvate cake',1200.00,'C2');
INSERT INTO Products VALUES ((Product_ID),'Cheesecake',1500.00,'C2');

/*Beverages*/
INSERT INTO Products VALUES ((Product_ID),'Cappuccino',600.00, 'C3');
INSERT INTO Products VALUES ((Product_ID),'Hot choclate',400.00, 'C3');
INSERT INTO Products VALUES ((Product_ID),'Coffee',600.00, 'C3');
INSERT INTO Products VALUES ((Product_ID),'Smothies',800.00, 'C3');

select * from Products ORDER BY Product_ID;

#Delete a specific record
#DELETE from Products where Product_ID = '3';

#drop table Products;
#DESCRIBE Products;

CREATE TABLE Stock (
    Product_ID VARCHAR(10) PRIMARY KEY, 
    Product_Name VARCHAR(100) NOT NULL,
    Category_ID VARCHAR(10) NOT NULL,
    Price DECIMAL(10, 2) NOT NULL,
    Availability VARCHAR(10) NOT NULL,
    FOREIGN KEY (Category_ID) REFERENCES Categories(Category_ID) ON UPDATE CASCADE ON DELETE CASCADE
);

INSERT INTO Stock VALUES ('4', 'Burger', 'C1', 1000.00, 'Available');
INSERT INTO Stock VALUES ('5', 'Brownie', 'C2', 500.00, 'Available');
INSERT INTO Stock  VALUES ('7', 'Red Velvet Cake', 'C2', 1200.00, 'Available');
INSERT INTO Stock  VALUES ('12', 'Smoothies', 'C3', 800.00, 'Available');

select * from Stock;
#drop table Stock;

CREATE TABLE Sales(
    Sales_id VARCHAR(10) PRIMARY KEY unique,
    Product_ID INT NOT NULL,
	Product_Name VARCHAR(100) NOT NULL,
    Sale_Date DATETIME DEFAULT CURRENT_TIMESTAMP,
    Unit_Price DECIMAL(10, 2) NOT NULL,
    Total_Price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (Product_ID) REFERENCES Products(Product_ID) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO Sales VALUES ('S1','4','Burger',now(),'1000.00','4000.00');
INSERT INTO Sales VALUES ('S2','3','Sandwitch',NOW() - INTERVAL 3 DAY,'700.00','2100.00');
INSERT INTO Sales VALUES ('S3','6','Muffine',NOW() - INTERVAL 1 MONTH,'200.00','1200.00');
INSERT INTO Sales VALUES ('S4','12','Smothies',NOW() - INTERVAL 5 SECOND,'800.00','1600.00');

select * from sales;
#drop table sales;

CREATE TABLE User(
	User_ID INT primary key AUTO_INCREMENT,
    User_Name VARCHAR(30) UNIQUE,
    User_Password VARCHAR(18) NOT NULL,
    Email VARCHAR(50),
    Contact_no CHAR(10),
    Joined_date DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO User VALUES ((User_ID),'Sashanka','sashanka_27','sashanka.da@gmail.com','0704046228',Now());
INSERT INTO User VALUES ((User_ID),'Oshini Bandara','O2001','oshabc@gmail.com','0703391092',NOW() - INTERVAL 3 DAY);
INSERT INTO User VALUES ((User_ID),'Kamal suraweera','kamal123','kamalsuraweera@gmail.com','0705770980',NOW() - INTERVAL 1 MONTH);
INSERT INTO User VALUES ((User_ID),'Sahan Gamage','sag64','sahan30.g@gmail.com','0714002424',NOW() - INTERVAL 5 SECOND);

select * from User ORDER BY User_ID;
#drop table User;