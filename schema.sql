DROP DATABASE IF EXISTS  ticketpal;

CREATE DATABASE ticketpal;

USE ticketpal;

CREATE TABLE ticketinfo (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255),
    min int,
    avg int,
    max int,
    webID varchar(255),
    localDate varchar(255),
    api int,
    city varchar(255),
    venueLocation varchar(255),
    state varchar(255),
    PRIMARY KEY (id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
