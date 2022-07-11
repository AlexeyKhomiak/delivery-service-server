const Router = require("express");
const router = new Router();
const orderController = require("../controller/order.controller");

router.post("/order", orderController.createOrder);
router.get("/order", orderController.getOrders);
router.get("/order/:id", orderController.getOneOrder);
router.put("/order", orderController.updateOrder);
router.delete("/order/:id", orderController.deleteOrder);

module.exports = router;