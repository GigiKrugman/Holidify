const Accomodation = require("../models/Accomodation");

const getAccomodations = async (req, res) => {
  const accomodations = await Accomodation.find();

  res.json(accomodations);
};

const getAccomodationById = async (req, res) => {
  const accomodation = await Accomodation.findById(req.params.id);

  res.json(accomodation);
};

module.exports = { getAccomodations, getAccomodationById };
