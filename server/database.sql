CREATE DATABASE perndb;

CREATE TABLE users (
    userId SERIAL PRIMARY KEY,
    userName VARCHAR(20) NOT NULL,
    password VARCHAR(16) NOT NULL,
    email VARCHAR(20),
    admin BOOLEAN
);