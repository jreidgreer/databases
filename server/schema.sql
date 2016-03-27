CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id int NOT NULL AUTO_INCREMENT,
  message varchar(140) NOT NULL,
  user varchar(20) NOT NULL,
  room varchar(20) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(20) NOT NULL,
  PRIMARY KEY (id)
  );

CREATE TABLE userStyles (
  id int NOT NULL AUTO_INCREMENT


  )
-- CREATE TABLE rooms (
--   id int NOT NULL AUTO_INCREMENT,
--   roomname varchar(20) NOT NULL,
--   PRIMARY KEY (id)
--   );






