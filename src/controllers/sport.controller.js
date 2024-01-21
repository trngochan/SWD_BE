const SportService = require("../services/sport.service");

exports.create_sport = function (req, res) {
  const newSport = req.body;
  SportService.createSport(newSport, function (result) {
    if (result.status === "success") {
      res.status(200).json({ message: result.message });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};

exports.get_sport = function (req, res) {
  const sportId = req.params.id;
  SportService.getSportById(sportId, function (result) {
    if (result.status === "success") {
      res.status(200).json({ result: result.result });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};

exports.get_all_sports = function (req, res) {
  SportService.getAllSports(function (result) {
    if (result.status === "success") {
      res.status(200).json({ result: result.result });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};

exports.update_sport = function (req, res) {
  const sportId = req.params.id;
  const updatedSport = req.body;
  SportService.updateSport(sportId, updatedSport, function (result) {
    if (result.status === "success") {
      res.status(200).json({ message: result.message });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};

exports.delete_sport = function (req, res) {
  const sportId = req.params.id;
  SportService.deleteSport(sportId, function (result) {
    if (result.status === "success") {
      res.status(200).json({ message: result.message });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};
