const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

// Resale Model
const Resale = require("../models/Resale");

// @route   GET api/all
// @desc    Get Resale
// @access  Public
router.get("/all", (req, res) => {
  Resale.find().then((resale) => res.json(resale));
});

router.get("/:type", (req, res) => {
  Resale.find()
    .where("type")
    .equals(req.params.type)
    .then((resale) => res.json(resale));
});

// @route   POST api/
// @desc    Create a Resale
// @access  Private
router.post("/", auth, (req, res) => {
  const newResale = new Resale({
    type: req.body.type,
    price: req.body.price,
    img: req.body.img,
    address: req.body.address,
    description: req.body.description,
  });
  newResale.save().then((resale) => res.json(resale));
});

module.exports = router;
