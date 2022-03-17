const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ResaleSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = Resale = mongoose.model("resale", ResaleSchema);
