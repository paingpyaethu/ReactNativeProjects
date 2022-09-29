const express = require("express");
const { Order } = require("../models/order");
const { OrderItem } = require("../models/order-item");
const router = express.Router();

/***** Order List *****/
router.get("/", async (req, res) => {
  const orderList = await Order.find()
    .populate("user", "name")
    .sort({ dateOrdered: -1 });
  if (!orderList) {
    res.status(500).json({ success: false, message: "Order not found" });
  }
  res.send(orderList);
});

/***** Order Lisy By Id *****/
router.get("/:id", async (req, res) => {
  const orderDetail = await Order.findById(req.params.id)
    .populate("user", "name")
    .populate({
      path: "orderItems",
      populate: {
        path: "product",
        populate: "category",
      },
    });
  if (!orderDetail) {
    res.status(500).json({ success: false, message: "Order not found" });
  }
  res.send(orderDetail);
});

/***** Create Order *****/
router.post("/", async (req, res) => {
  const orderItemsIds = Promise.all(
    req.body.orderItems.map(async (order_item) => {
      let newOrderItem = new OrderItem({
        quantity: order_item.quantity,
        product: order_item.product,
      });
      newOrderItem = await newOrderItem.save();

      return newOrderItem._id;
    })
  );
  const orderItemsIdsResovled = await orderItemsIds;

  const totalPrices = await Promise.all(
    orderItemsIdsResovled.map(async (orderItemId) => {
      const orderItem = await OrderItem.findById(orderItemId).populate(
        "product",
        "price"
      );
      const totalPrice = orderItem.product.price * orderItem.quantity;
      return totalPrice;
    })
  );
  const finalTotalPrice = totalPrices.reduce((a, b) => a + b, 0);

  let order = new Order({
    orderItems: orderItemsIdsResovled,
    shippingAddress1: req.body.shippingAddress1,
    shippingAddress2: req.body.shippingAddress2,
    city: req.body.city,
    zip: req.body.zip,
    country: req.body.country,
    phone: req.body.phone,
    status: req.body.status,
    totalPrice: finalTotalPrice,
    user: req.body.user,
  });

  order = await order.save();

  if (!order)
    return res
      .status(400)
      .json({ success: false, message: "Order cannot be created" });
  res.status(200).send({
    success: true,
    message: "Order created successfully!",
    data: order,
  });
});

/***** Update Order Status By Id *****/
router.put("/:id", async (req, res) => {
  const orderStatus = await Order.findByIdAndUpdate(
    req.params.id,
    {
      status: req.body.status,
    },
    { new: true }
  );
  if (!orderStatus)
    return res.status(400).send("OrderStatus cannot be updated!");

  res.send(orderStatus);
});

/***** Delete Order By Id *****/
router.delete("/:id", (req, res) => {
  Order.findByIdAndRemove(req.params.id)
    .then(async (order) => {
      if (order) {
        await order.orderItems.map(async (orderItem) => {
          await OrderItem.findByIdAndRemove(orderItem);
        });
        return res
          .status(200)
          .json({ success: true, message: "Order removed successfully" });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "Order not found" });
      }
    })
    .catch((err) => {
      return res.status(400).json({ success: false, error: err });
    });
});

/***** Total Sales *****/
router.get("/get/totalsales", async (req, res) => {
  const totalSales = await Order.aggregate([
    { $group: { _id: null, totalsales: { $sum: "$totalPrice" } } },
  ]);
  if (!totalSales) {
    return res
      .status(404)
      .json({ success: false, message: "Order sales cannot be generated!" });
  }
  res
    .status(200)
    .json({ success: true, totalsales: totalSales.pop().totalsales });
});

/***** Order Count *****/
router.get(`/get/count`, async (req, res) => {
  const orderCount = await Order.countDocuments();

  if (!orderCount) {
    return res.status(500).json({
      success: false,
    });
  }
  res.send({
    orderCount: orderCount,
  });
});

module.exports = router;
