const YardService = require("../services/yard.service");

exports.getAllYards = function (req, res) {
  YardService.getAllYards(function (result) {
    if (result.status === "success") {
      res.status(200).json({ result: result.result });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};

exports.getYardById = function (req, res) {
  const yardId = req.params.id;
  YardService.getYardById(yardId, function (result) {
    if (result.status === "success") {
      res.status(200).json({ result: result.result });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};

exports.createYard = function (req, res) {
  const newYard = req.body;
  YardService.createYard(newYard, function (result) {
    if (result.status === "success") {
      res.status(200).json({ message: result.message });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};

exports.updateYard = function (req, res) {
  const yardId = req.params.id;
  const updatedYard = req.body;
  YardService.updateYard(yardId, updatedYard, function (result) {
    if (result.status === "success") {
      res.status(200).json({ message: result.message });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};

exports.deleteYard = function (req, res) {
  const yardId = req.params.id;
  YardService.deleteYard(yardId, function (result) {
    if (result.status === "success") {
      res.status(200).json({ message: result.message });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};
