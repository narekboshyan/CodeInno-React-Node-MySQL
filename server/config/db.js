import mysql from "mysql2";

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "restaurantDB",
    password: "root",
});

export const db = pool.promise();
