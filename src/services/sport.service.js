const Sport = require("../models/sport.model");

const SportService = {};

SportService.createSport = function (newSport, callback) {
  Sport.createSport(newSport, function (result) {
    callback(result);
  });
};

SportService.getSportById = function (sportId, callback) {
  Sport.getSportById(sportId, function (result) {
    callback(result);
  });
};

SportService.getAllSports = function (callback) {
  Sport.getAllSports(function (result) {
    callback(result);
  });
};

SportService.updateSport = function (sportId, updatedSport, callback) {
  Sport.updateSport(sportId, updatedSport, function (result) {
    callback(result);
  });
};

SportService.deleteSport = function (sportId, callback) {
  Sport.deleteSport(sportId, function (result) {
    callback(result);
  });
};

module.exports = SportService;
