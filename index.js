const express = require("express");
const orderRouter = require("./routes/order.routes");
const cartRouter = require("./routes/cart.routes");
const shopRouter = require("./routes/shop.routes");
const productRouter = require("./routes/product.routes");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());

app.use("/api", orderRouter);
app.use("/api", cartRouter);
app.use("/api", shopRouter);
app.use("/api", productRouter);


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
