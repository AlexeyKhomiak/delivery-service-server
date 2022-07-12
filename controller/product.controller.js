const db = require("../db");

class ProductController {

    async getProducts(req, res) {
        const products = await db.query("SELECT * FROM product");
        res.set('Access-Control-Allow-Origin', '*');
        res.json(products.rows);
    }

}

module.exports = new ProductController();