const Experience = require("../models/Experience");

const getExperiences = async (req, res) => {
  const experiences = await Experience.find();

  res.json(experiences);
};

const getExperienceById = async (req, res) => {
  const experience = await Experience.findById(req.params.id);

  res.json(experience);
};

module.exports = { getExperiences, getExperienceById };
