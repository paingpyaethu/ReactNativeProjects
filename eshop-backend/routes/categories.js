const express = require("express");
const { Category } = require("../models/category");
const router = express.Router();

router.get("/", async (req, res) => {
  const categoryList = await Category.find();
  if (!categoryList) {
    res.status(500).json({ success: false, message: "Category not found" });
  }

  res.status(200).send(categoryList);
});

router.get("/:id", async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    return res.status(404).json({
      success: false,
      message: "Category with the given id not found",
    });
  }
  res.status(200).send(category);
});

router.post("/", async (req, res) => {
  let category = new Category({
    name: req.body.name,
    icon: req.body.icon,
    color: req.body.color,
  });
  category = await category.save();
  if (!category) return res.status(404).send("Category cannot be created");

  res.send(category);
});

router.delete("/:id", async (req, res) => {
  Category.findByIdAndRemove(req.params.id)
    .then((category) => {
      if (category) {
        return res
          .status(200)
          .json({ success: true, message: "Category removed successfully" });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "Category not found" });
      }
    })
    .catch((err) => {
      return res.status(400).json({ success: false, error: err });
    });
});

router.put("/:id", async (req, res) => {
  const updateCategory = await Category.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      icon: req.body.icon,
      color: req.body.color,
    },
    { new: true }
  );
  if (!updateCategory)
    return res.status(400).send("Category cannot be updated!");

  res.send(updateCategory);
});

module.exports = router;
