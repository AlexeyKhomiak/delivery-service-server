const Router = require("express");
const router = new Router();
const shopController = require("../controller/shop.controller");

router.get("/shop", shopController.getShops);
router.get("/shop/:id", shopController.getShopWithProductsById);



module.exports = router;