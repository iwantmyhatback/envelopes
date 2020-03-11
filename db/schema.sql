CREATE DATABASE
IF NOT EXISTS myfundsmanager;
USE myfundsmanager;

CREATE TABLE
IF NOT EXISTS categories
(
  id INT
(9) AUTO_INCREMENT,
  name VARCHAR
(255),
  now INT
(20),
  spent INT
(20),
  PRIMARY KEY
(id)
);

CREATE TABLE
IF NOT EXISTS funds
(
  total INT
(20)
);

INSERT INTO funds
  (total)
VALUES
  (0);