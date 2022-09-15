const express = require("express");
const { Order } = require("../models/order");
const router = express.Router();

router.get("/", async (req, res) => {
  const orderList = await Order.find();
  if (!orderList) {
    res.status(500).json({ success: false, message: "Order not found" });
  }
  res.send(orderList);
});

module.exports = router;
