const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const FavouriteSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  resale_flat_id: {
    type: String,
    required: true,
  },
});

module.exports = Favourite = mongoose.model("favourite", FavouriteSchema);
