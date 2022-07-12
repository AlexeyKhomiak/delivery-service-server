const Router = require("express");
const router = new Router();
const cartController = require("../controller/cart.controller");

router.post("/product", cartController.createCart);
router.get("/product", cartController.getCartByOrder);


module.exports = router;