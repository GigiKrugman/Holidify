const mongoose = require("mongoose");

const AccomodationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  images: { type: [String], required: true },
  capacity: { type: Number, required: true },
  amenities: { type: [String], required: true },
});

module.exports = mongoose.model("Accomodation", AccomodationSchema);
