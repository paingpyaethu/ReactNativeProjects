const express = require("express");
const { Category } = require("../models/category");
const router = express.Router();

router.get("/", async (req, res) => {
  const categoryList = await Category.find();
  if (!categoryList) {
    res.status(500).json({ success: false, message: "Category not found" });
  }
  res.send(categoryList);
});

module.exports = router;
