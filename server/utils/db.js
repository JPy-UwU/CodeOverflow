import mysql from "mysql";

// create connection to database
export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "BabbuKoot",
});

// connect to database
db.connect();

// create CodeOverflow database
db.query("CREATE DATABASE IF NOT EXISTS `CodeOverflow`", (err, result) => {
  if (err) throw err;
  console.log("Database created");
});

// use CodeOverflow database
db.query("USE `CodeOverflow`", (err, result) => {
  if (err) throw err;
  console.log("Using CodeOverflow database");
});

// create User table
db.query(
  "CREATE TABLE IF NOT EXISTS `User` (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(20) NOT NULL, email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL)",
  (err, result) => {
    if (err) throw err;
    console.log("User table created");
  }
);

// create Tag table
db.query("CREATE TABLE IF NOT EXISTS `Tag` (id INT AUTO_INCREMENT PRIMARY KEY, tag_name VARCHAR(20) NOT NULL)",
  (err, result) => {
    if (err) throw err;
    console.log("Tag table created");
});

// create VoteType table
db.query("CREATE TABLE IF NOT EXISTS `VoteType` (id INT AUTO_INCREMENT PRIMARY KEY, vote_type VARCHAR(10) NOT NULL)",
  (err, result) => {
    if (err) throw err;
    console.log("VoteType table created");
});

// create PostType table
db.query("CREATE TABLE IF NOT EXISTS `PostType` (id INT AUTO_INCREMENT PRIMARY KEY, post_type VARCHAR(10) NOT NULL)",
  (err, result) => {
    if (err) throw err;
    console.log("PostType table created");
});

// create Post table
db.query("CREATE TABLE IF NOT EXISTS `Post` (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255) NOT NULL, description VARCHAR(255) NOT NULL, user_id INT NOT NULL, post_type_id INT NOT NULL, parent_question_id INT, accepted_answer_id INT, FOREIGN KEY (user_id) REFERENCES User(id), FOREIGN KEY (post_type_id) REFERENCES PostType(id), FOREIGN KEY (parent_question_id) REFERENCES Post(id), FOREIGN KEY (accepted_answer_id) REFERENCES Post(id))",
  (err, result) => {
    if (err) throw err;
    console.log("Post table created");
});

// create Post_Tag table
db.query("CREATE TABLE IF NOT EXISTS `Post_Tag` (id INT AUTO_INCREMENT PRIMARY KEY, post_id INT NOT NULL, tag_id INT NOT NULL, FOREIGN KEY (post_id) REFERENCES Post(id), FOREIGN KEY (tag_id) REFERENCES Tag(id))",
  (err, result) => {
    if (err) throw err;
    console.log("Post_Tag table created");
});

// create Comment table
db.query("CREATE TABLE IF NOT EXISTS `Comment` (id INT AUTO_INCREMENT PRIMARY KEY, comment_text VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, user_id INT NOT NULL, post_id INT NOT NULL, FOREIGN KEY (user_id) REFERENCES User(id), FOREIGN KEY (post_id) REFERENCES Post(id))",
  (err, result) => {
    if (err) throw err;
    console.log("Comment table created");
});

// create Vote table
db.query("CREATE TABLE IF NOT EXISTS `Vote` (id INT AUTO_INCREMENT PRIMARY KEY, user_id INT NOT NULL, post_id INT NOT NULL, vote_type_id INT NOT NULL, FOREIGN KEY (user_id) REFERENCES User(id), FOREIGN KEY (post_id) REFERENCES Post(id), FOREIGN KEY (vote_type_id) REFERENCES VoteType(id))",
  (err, result) => {
    if (err) throw err;
    console.log("Vote table created");
});