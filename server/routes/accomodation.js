const express = require("express");
const router = express.Router();
const {
  getAccomodationById,
  getAccomodations,
} = require("../controllers/accomodationControllers");

router.get("/", getAccomodations);
router.get("/:id", getAccomodationById);

module.exports = router;
