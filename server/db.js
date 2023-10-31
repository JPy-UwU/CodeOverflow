import mysql from 'mysql';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'BabbuKoot',
});

db.connect();

export default db;