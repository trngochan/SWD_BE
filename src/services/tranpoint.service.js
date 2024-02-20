// tranpoint.service.js
const TranpointModel = require("../models/tranpoint.model");

class TranpointService {
  static getAllTranpoints(callback) {
    TranpointModel.getAllTranpoints(callback);
  }

  static createTranpoint(newTranpoint, callback) {
    TranpointModel.createTranpoint(newTranpoint, callback);
  }

  static get_tranpoint_new(newTranpoint, callback) {
    TranpointModel.get_tranpoint_new(newTranpoint, callback);
  }

  static getTranpointById(tranpointId, callback) {
    TranpointModel.getTranpointById(tranpointId, callback);
  }

  static updateTranpoint(tranpointId, updatedTranpoint, callback) {
    TranpointModel.updateTranpoint(tranpointId, updatedTranpoint, callback);
  }

  static deleteTranpoint(tranpointId, callback) {
    TranpointModel.deleteTranpoint(tranpointId, callback);
  }
}

module.exports = TranpointService;
