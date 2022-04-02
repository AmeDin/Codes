const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

// Resale Model
const Favourite = require("../models/Favourite");

// @route   GET api/all
// @desc    Get Favourite
// @access  Public
router.get("/", (req, res) => {
  Favourite.find().then((favourite) => res.json(favourite));
});

// @route   GET api/all
// @desc    Get Favourite by email
// @access  Public
router.get("/:email", (req, res) => {
  Favourite.find()
    .where("email")
    .equals(req.params.type)
    .then((favourite) => res.json(favourite));
});

// @route   POST api/
// @desc    Create a Favourite
// @access  Private
router.post("/", auth, (req, res) => {
  const newFavourite = new Resale({
    email: req.body.email,
    resale_flat_id: req.body.resale_flat_id,
  });
  newFavourite.save().then((favourite) => res.json(favourite));
});

module.exports = router;
