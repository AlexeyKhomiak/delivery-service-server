const db = require("../db");

class ProductController {

    async createProduct(req, res) {        
        const {orderId, prodId} = req.body;
        const newOrder = await db.query("INSERT INTO order_prod (order_id, prod_id) VALUES ($1, $2) RETURNING *",
            [orderId, prodId]);
        res.json(newOrder.rows);        
    }

    async getProductsByOrder(req, res) {
        const id = req.query.id;
        const orders = await db.query("SELECT * FROM order_prod WHERE order_id = $1", [id]);
        res.json(orders.rows);
    }

}

module.exports = new ProductController();