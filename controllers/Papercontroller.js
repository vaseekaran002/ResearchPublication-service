const Paper = require("../models/Paper");

const display = async (req, res) => {
  try {
    const paperDet = await Paper.create({
      title: req.body.title,
      domain: req.body.domain,
      yearOfPublication: req.body.yearOfPublication,
      author: req.body.yearOfPublication,
      indexing: req.body.indexing,
      journalName: req.body.journalName,
      externalResources: req.body.externalResources,
    });
    const response = await paperDet.save();
    res.send(response);
  } catch (e) {
    res.send(e.message);
  }
};

module.exports = {
  display,
};
