DROP DATABASE IF EXISTS to_do;
CREATE DATABASE to_do;

USE to_do;

CREATE TABLE todos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  description TEXT
);

INSERT INTO todos (description) VALUES ('buy chocolate'), ('sleep'), ('study');
