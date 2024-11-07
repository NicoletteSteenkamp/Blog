import mysql from 'mysql2';
import dotenv from 'dotenv';

// Initialize dotenv to load environment variables
dotenv.config();

// Creating a connection to the MySQL database
export const db = mysql.createConnection({
    host: process.env.DB_HOST,           // Correct access to environment variable
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,           // Correct access for port
});
