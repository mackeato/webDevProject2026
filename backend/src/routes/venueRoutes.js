const express = require("express");
const router = express.Router();

const {
  getVenues
} = require("../controllers/venuesController");

router.get("/", getVenues);

module.exports = router;