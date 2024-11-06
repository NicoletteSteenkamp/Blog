import mysql2 from "mysql2";
import dotenv from "dotenv";  // Import dotenv to load environment variables

// Load environment variables from .env file
dotenv.config();

export const db = mysql2.createConnection({
  host: process.env.DB_HOST,    
  user: process.env.DB_USER,    
  password: process.env.DB_PASSWORD,  
  database: process.env.DB_NAME,    
  port: process.env.DB_PORT,    
});

// Test the connection
db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database successfully!");
});
