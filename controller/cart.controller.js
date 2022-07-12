const db = require("../db");

class CartController {

    async createCart(req, res) {        
        const {orderId, prodId} = req.body;
        const newCart = await db.query("INSERT INTO order_prod (order_id, prod_id) VALUES ($1, $2) RETURNING *",
            [orderId, prodId]);
        res.set('Access-Control-Allow-Origin', '*');
        res.json(newCart.rows);        
    }

    async getCartByOrder(req, res) {
        const id = req.query.id;
        const cart = await db.query("SELECT * FROM order_prod WHERE order_id = $1", [id]);
        res.set('Access-Control-Allow-Origin', '*');
        res.json(cart.rows);
    }
}



module.exports = new CartController();