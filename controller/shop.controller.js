const db = require("../db");

class ShopController {

    async getShops(req, res) {
        const shops = await db.query("SELECT * FROM shop");
        res.json(shops.rows);
    }

    async getShopWithProductsById(req, res) {
        const id = req.params.id;
        const shops = await db.query("SELECT shop.id as shop_id, shop.name as shop_name, product.id, product.name, product.price, product.shop_id, product.img FROM shop, product WHERE shop.id = product.shop_id AND shop.id = $1", [id]);
        res.json(shops.rows);
    }


}

module.exports = new ShopController();