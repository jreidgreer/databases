CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id int NOT NULL AUTO_INCREMENT,
  message varchar(140) NOT NULL,
  user int NOT NULL,
  room int NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(20) NOT NULL,
  PRIMARY KEY (id)
  );

CREATE TABLE rooms (
  id int NOT NULL AUTO_INCREMENT,
  roomname varchar(20) NOT NULL,
  PRIMARY KEY (id)
  );






