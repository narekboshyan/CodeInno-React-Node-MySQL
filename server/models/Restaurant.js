import { db } from "../config/db.js";

export class Restaurant {
    static findAll() {
        let sql = `SELECT * FROM Restaurants`;
        return db.execute(sql);
    }

    static findById(id) {
        let sql = `SELECT * FROM Restaurants WHERE id = ${id}`;
        return db.execute(sql);
    }

    static getFeedback(id) {
        let sql = `SELECT * FROM Feedbacks WHERE restaurantId = ${id}`;
        db.execute(sql);
    }

    static giveRate(id, rate) {
        let sql = `UPDATE Restaurants  WHERE id = ${+id} SET rating = ${+rate}`;
        db.execute(sql);
    }

    static async writeFeedback(content) {
        let sql = `INSERT INTO Feedbacks (restaurantId, Comment ) VALUES('${+content.id}', '${
            content.text
        }')`;
        const x = await db.execute(sql);
        return x[0].insertId;
    }
}
