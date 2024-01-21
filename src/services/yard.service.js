const Yard = require("../models/yard.model");

const YardService = {
  getAllYards: function (callback) {
    Yard.getAllYards(callback);
  },

  getYardById: function (yardId, callback) {
    Yard.getYardById(yardId, callback);
  },

  createYard: function (newYard, callback) {
    Yard.createYard(newYard, callback);
  },

  updateYard: function (yardId, updatedYard, callback) {
    Yard.updateYard(yardId, updatedYard, callback);
  },

  deleteYard: function (yardId, callback) {
    Yard.deleteYard(yardId, callback);
  },
};

module.exports = YardService;
