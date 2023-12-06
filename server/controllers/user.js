import { db } from "../utils/db.js";
import jwt from "jsonwebtoken";

export const getUser = (req, res) => {
  const username = req.params.userId;
  const query = "SELECT * FROM User WHERE username=?";
  const values = [username];

  db.query(query, values, (err, data) => {
    if (err) 
      return res.status(500).json(err);
    const { password, ...info } = data[0];

    return res.json(info);
  });
};

export const deleteUser = (req, res) => {
  const userId = req.params.userId;
  const query = "DELETE FROM User WHERE id=?";
  const values = [userId];

  db.query(query, values, (err, data) => {
    if (err) 
      return res.status(500).json(err);
    return res.json({ message: "User deleted successfully!" });
  });
};

export const getAllUsers = (req, res) => {
  const query = "SELECT * FROM User";

  db.query(query, (err, data) => {
    if (err) 
      return res.status(500).json(err);
    console.log(res.json(data));
    return res.json(data);
  });
};