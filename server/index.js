import 'dotenv/config';
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import "./utils/create-db.js";
import authRoutes from "./routes/auth.js";

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));