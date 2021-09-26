PostgreSQL Commands :
Connect to Postgres Server -

% psql -h localhost -p [port](in general - 5432) -U [User_name] {database_name}

% psql --help [for all the helpful commands]
Another way to connect to database -

% psql
After entering the psql CLI

[Note - Use Semicolon to execute an SQL command]

To list all Databases -

=> \l
To quit psql CLI -

=> \q
To check all the users -

=> \du
To create a Database -

=> CREATE DATABASE {database_name};
To delete a Database -

=> DROP DATABASE {database_name};
To connect with a Database -

=> \c database_name
To Create Table -

=> CREATE TABLE table_name(
	ID INT PRIMARY KEY SERIAL,
	column_name1 data_type + constraints if any,
	column_name2 data_type + constraints if any,
	…,
	…,
	…
	);
To Delete Table -

=> DROP TABLE table_name;
Visualization :
Database (Drive)
Tables (Files)
Schemas (Folders)
Tables (Files)

> creating schema
create schema myschema;
creating table inside schema

=> CREATE TABLE myschema.company(
   	ID   INT              NOT NULL,
   	NAME VARCHAR (20)     NOT NULL,
   	AGE  INT              NOT NULL,
   	ADDRESS  CHAR (25),
   	SALARY   DECIMAL (18, 2),
   	PRIMARY KEY (ID)
	);
delete the schema + all tables inside it

=> DROP SCHEMA myschema CASCADE;
Insert values in table

=> INSERT INTO DEPARTMENT (ID,DEPT,EMP_ID)
   VALUES (1,'CSE',87),(2,'IT',21),(3,'EN',60);
some example of queries

=> SELECT (15 + 6) AS ADDITION ;                         /* Prints sum of 15 and 6 in column addition */
=> SELECT COUNT(*) AS "RECORDS" FROM COMPANY;
=> SELECT CURRENT_TIMESTAMP;                             /* Prints current time */
=> select * from COMPANY;
=> SELECT * FROM COMPANY WHERE AGE >= 25 AND SALARY >= 65000;
=> SELECT * FROM COMPANY WHERE NAME LIKE 'Pa%';
=> SELECT * FROM COMPANY WHERE SALARY::text LIKE '200%';         /* Prints all rows in which slary starts with
                                                                 200 and convert salary column type to text */

=> SELECT * FROM COMPANY WHERE AGE IN ( 25, 27 );
=> SELECT * FROM COMPANY WHERE AGE NOT IN ( 25, 27 );
=> SELECT * FROM COMPANY WHERE AGE BETWEEN 25 AND 27;
update queries

=> UPDATE COMPANY SET SALARY = 15000 WHERE ID = 3;
=> UPDATE COMPANY SET ADDRESS = 'Texas', SALARY=20000;
delete row from table

=> DELETE FROM COMPANY WHERE ID = 2;
Primary keys & Foreign keys :
=> CREATE TABLE customers(
   	customer_id INT GENERATED ALWAYS AS IDENTITY,
   	customer_name VARCHAR(255) NOT NULL,
   	PRIMARY KEY(customer_id)
	);

=> CREATE TABLE contacts(
   	contact_id INT GENERATED ALWAYS AS IDENTITY,
   	customer_id INT,
   	contact_name VARCHAR(255) NOT NULL,
   	phone VARCHAR(15),
   	email VARCHAR(100),
   	PRIMARY KEY(contact_id),
   	CONSTRAINT fk_customer
      FOREIGN KEY(customer_id)
	  REFERENCES customers(customer_id)
	  ON DELETE CASCADE
	);