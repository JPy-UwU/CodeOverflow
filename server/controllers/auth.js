import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { db } from "../utils/db.js";

export const register = (req, res) => {

  const query = "SELECT * FROM User WHERE username = ?";
  const values = [req.body.username];

  db.query(query, values, (err, result) => {
    if (err) return res.status(500).json({ message: err.message });
    if (result.length > 0) {
      return res.status(409).json({ message: "Username already exists" });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const query = "INSERT INTO User (`username`, `email`, `password`) VALUE (?)";
    const values = [[req.body.username, req.body.email, hashedPassword]];

    db.query(query, values, (err, result) => {
      if (err) 
        return res.status(500).json({ message: err.message });

      return res.status(200).json("User created");
    });
  });
};

export const login = (req, res) => {
  const query = "SELECT * FROM User WHERE username = ?";
  const values = [req.body.username];

  db.query(query, values, (err, result) => {
    if (err) 
      return res.status(500).json({ message: err.message });

    if (result.length === 0) {
      return res.status(404).json({ message: "Username does not exist" });
    }

    const passwordIsValid = bcrypt.compareSync(req.body.password, result[0].password);
    if (!passwordIsValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ id: result[0].id }, "secret");

    const {password, ...user} = result[0];

    res.cookie("accessToken", token, {
      httpOnly: true,
    }).status(200).json(user);
  });
};

export const logout = (req, res) => {
  res.clearCookie("accessToken", {
    secure: true,
    sameSite: "none",
  }).status(200).json({ message: "Logged out" });
};