-- Create ormlearn schema
CREATE SCHEMA IF NOT EXISTS ormlearn;

-- Use the schema
USE ormlearn;

-- Create country table
CREATE TABLE IF NOT EXISTS country (
    co_code VARCHAR(2) PRIMARY KEY,
    co_name VARCHAR(50)
);

-- Insert sample records
INSERT INTO country VALUES ('IN', 'India');
INSERT INTO country VALUES ('US', 'United States of America');
