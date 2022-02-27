import { db } from "../config/db.js";

export class Restaurant {
    static findAll() {
        let sql = `SELECT * FROM Restaurants`;
        return db.execute(sql);
    }
    static findById(id) {
        let sql = `SELECT * FROM Restaurants WHERE id = ${id} LIMIT 1`;
        return db.execute(sql);
    }
}
