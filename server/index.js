import express from "express";
import mysql from "mysql";
import dotenv from "dotenv";
import router from "./routes/restaurantRoutes.js";
import { db } from "./config/db.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
// "proxy": "http://localhost:5000/",

dotenv.config();

app.use(router);

const PORT = process.env.PORT || 5000;

app.listen(5000, () => {
    console.log(`Server is  running on PORT ${PORT}`);
});
 