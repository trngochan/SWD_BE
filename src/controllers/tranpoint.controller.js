// tranpoint.controller.js
const TranpointService = require("../services/tranpoint.service");

exports.get_list = function (req, res) {
  TranpointService.getAllTranpoints(function (result) {
    if (result.status === "success") {
      res.status(200).json(result);
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};

exports.create = function (req, res) {
  const newTranpoint = req.body;
  TranpointService.createTranpoint(newTranpoint, function (result) {
    if (result.status === "success") {
      res.status(200).json({ message: result.message });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};

exports.get_tranpoint = function (req, res) {
  const tranpointId = req.params.id;
  TranpointService.getTranpointById(tranpointId, function (result) {
    if (result.status === "success") {
      res.status(200).json({ result: result.result });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};

exports.update_tranpoint = function (req, res) {
  const tranpointId = req.params.id;
  const updatedTranpoint = req.body;
  TranpointService.updateTranpoint(
    tranpointId,
    updatedTranpoint,
    function (result) {
      if (result.status === "success") {
        res.status(200).json({ message: result.message });
      } else if (result.status === "error") {
        res.status(404).json({ message: result.message });
      }
    }
  );
};

exports.delete_tranpoint = function (req, res) {
  const tranpointId = req.params.id;
  TranpointService.deleteTranpoint(tranpointId, function (result) {
    if (result.status === "success") {
      res.status(200).json({ message: result.message });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};
