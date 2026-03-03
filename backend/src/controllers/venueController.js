exports.getAllVenuew = (req, res) => {
  res.json([
    { id: 1, name: "Fake venue", type: "bar" },
    { id: 2, name: "Another fake", type: "restaurant" },
  ]);
};
