const Router = require("express");
const router = new Router();
const productController = require("../controller/product.controller");

router.get("/products", productController.getProducts);



module.exports = router;