import { db } from "../utils/db.js";
import jwt from "jsonwebtoken";

export const getUser = (req, res) => {
  const userId = req.params.userId;
  const query = "SELECT * FROM users WHERE id=?";
  const values = [userId];

  db.query(query, values, (err, data) => {
    if (err) 
      return res.status(500).json(err);
    const { password, ...info } = data[0];

    return res.json(info);
  });
};

export const deleteUser = (req, res) => {
  const userId = req.params.userId;
  const query = "DELETE FROM users WHERE id=?";
  const values = [userId];

  db.query(query, values, (err, data) => {
    if (err) 
      return res.status(500).json(err);
    return res.json({ message: "User deleted successfully!" });
  });
};
