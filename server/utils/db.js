import mysql from "mysql";

// create connection to database
export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "BabbuKoot",
});