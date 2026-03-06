const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../../stores.json");

const getVenues = (req, res) => {
  const data = fs.readFileSync(dataPath);
  const venues = JSON.parse(data);

  res.json(venues);
};

module.exports = {
  getVenues,
};
