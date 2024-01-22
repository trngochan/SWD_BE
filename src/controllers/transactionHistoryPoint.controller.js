// transactionHistoryPoint.controller.js
const TransactionHistoryPointService = require("../services/transactionHistoryPoint.service");

exports.get_list = function (req, res) {
  TransactionHistoryPointService.getAllTransactionHistoryPoints(function (result) {
    if (result.status === "success") {
      res.status(200).json(result);
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};

exports.create = function (req, res) {
  const newTransactionHistoryPoint = req.body;
  TransactionHistoryPointService.createTransactionHistoryPoint(newTransactionHistoryPoint, function (result) {
    if (result.status === "success") {
      res.status(200).json({ message: result.message });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};

exports.get_transactionHistoryPoint = function (req, res) {
  const transactionHistoryPointId = req.params.id;
  TransactionHistoryPointService.getTransactionHistoryPointById(transactionHistoryPointId, function (result) {
    if (result.status === "success") {
      res.status(200).json({ result: result.result });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};

exports.update_transactionHistoryPoint = function (req, res) {
  const transactionHistoryPointId = req.params.id;
  const updatedTransactionHistoryPoint = req.body;
  TransactionHistoryPointService.updateTransactionHistoryPoint(transactionHistoryPointId, updatedTransactionHistoryPoint, function (result) {
    if (result.status === "success") {
      res.status(200).json({ message: result.message });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};

exports.delete_transactionHistoryPoint = function (req, res) {
  const transactionHistoryPointId = req.params.id;
  TransactionHistoryPointService.deleteTransactionHistoryPoint(transactionHistoryPointId, function (result) {
    if (result.status === "success") {
      res.status(200).json({ message: result.message });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};
