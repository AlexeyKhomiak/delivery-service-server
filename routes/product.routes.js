const Router = require("express");
const router = new Router();
const productController = require("../controller/product.controller");

router.post("/product", productController.createProduct);
router.get("/product", productController.getProductsByOrder);


module.exports = router;