const TransactionHistoryPointModel = require("../models/transactionHistoryPoint.model");

class TransactionHistoryPointService {
  static getAllTransactionHistoryPoints(callback) {
    TransactionHistoryPointModel.getAllTransactionHistoryPoints(callback);
  }

  static get_by_idWallet(idWallet, callback) {
    TransactionHistoryPointModel.get_by_idWallet(idWallet, callback);
  }

  static createTransactionHistoryPoint(newTransactionHistoryPoint, callback) {
    TransactionHistoryPointModel.createTransactionHistoryPoint(
      newTransactionHistoryPoint,
      callback
    );
  }

  static getTransactionHistoryPointById(transactionHistoryPointId, callback) {
    TransactionHistoryPointModel.getTransactionHistoryPointById(
      transactionHistoryPointId,
      callback
    );
  }

  static updateTransactionHistoryPoint(
    transactionHistoryPointId,
    updatedTransactionHistoryPoint,
    callback
  ) {
    TransactionHistoryPointModel.updateTransactionHistoryPoint(
      transactionHistoryPointId,
      updatedTransactionHistoryPoint,
      callback
    );
  }

  static deleteTransactionHistoryPoint(transactionHistoryPointId, callback) {
    TransactionHistoryPointModel.deleteTransactionHistoryPoint(
      transactionHistoryPointId,
      callback
    );
  }
}

module.exports = TransactionHistoryPointService;
