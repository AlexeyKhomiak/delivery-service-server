const db = require("../db");

class OrderController {

    async createOrder(req, res) {
        const { name, email, phone, address, sum, cart } = req.body;
        const prodIdArr = [];
        const prodAmountArr = [];
        cart.forEach(element => {
            prodIdArr.push(element.id);
            prodAmountArr.push(element.amount);
        });
        const newOrder = await db.query(
            "WITH new_order AS ( INSERT INTO orders (name, email, phone, address, sum) " +
            "VALUES ($1, $2, $3, $4, $5) RETURNING id ) " +
            "INSERT INTO order_prod(order_id, prod_id, amount ) " +
            "SELECT (select id from new_order), unnest($6 :: INT []), unnest($7 :: INT []) " +
            "RETURNING *",
            [name, email, phone, address, sum, prodIdArr, prodAmountArr]);
        
        res.set('Access-Control-Allow-Origin', '*');
        res.json(newOrder.rows);
    }

    async getOrders(req, res) {
        const orders = await db.query("SELECT * FROM orders");
        res.set('Access-Control-Allow-Origin', '*');
        res.json(orders.rows);
    }

    async getOneOrder(req, res) {
        const id = req.params.id;
        const orders = await db.query("SELECT * FROM orders WHERE id = $1", [id]);
        res.set('Access-Control-Allow-Origin', '*');
        res.json(orders.rows);
    }

    async updateOrder(req, res) {
        const { id, name, email, phone, address, sum } = req.body;
        const order = await db.query("UPDATE orders SET name = $1, email = $2, phone =$3, address = $4, sum = $5 WHERE id=$6 RETURNING *",
            [name, email, phone, address, sum, id]);
        res.set('Access-Control-Allow-Origin', '*');
        res.json(order.rows);
    }

    async deleteOrder(req, res) {
        const id = req.params.id;
        const orders = await db.query("DELETE FROM orders WHERE id = $1", [id]);
        res.set('Access-Control-Allow-Origin', '*');
        res.json(orders.rows);
    }
}

module.exports = new OrderController();