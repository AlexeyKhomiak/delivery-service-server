const db = require("../db");

class OrderController {

    async createOrder(req, res) {        
        const {name, email, phone, address, sum} = req.body;
        const newOrder = await db.query("INSERT INTO orders (name, email, phone, address, sum) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [name, email, phone, address, sum]);
        res.json(newOrder.rows);        
    }

    async getOrders(req, res) {
        const orders = await db.query("SELECT * FROM orders");
        res.json(orders.rows);
    }

    async getOneOrder(req, res) {
        const id = req.params.id;
        const orders = await db.query("SELECT * FROM orders WHERE id = $1", [id]);
        res.json(orders.rows);
    }

    async updateOrder(req, res) {
        const {id, name, email, phone, address, sum} = req.body;
        const order = await db.query("UPDATE orders SET name = $1, email = $2, phone =$3, address = $4, sum = $5 WHERE id=$6 RETURNING *",
            [name, email, phone, address, sum, id]);
        res.json(order.rows);
    }

    async deleteOrder(req, res) {
        const id = req.params.id;
        const orders = await db.query("DELETE FROM orders WHERE id = $1", [id]);
        res.json(orders.rows);
    }
}

module.exports = new OrderController();