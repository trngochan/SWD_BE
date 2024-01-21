const Building = require("../models/building.model");

exports.createBuilding = function (newBuilding, callback) {
  Building.createBuilding(newBuilding, function (result) {
    callback(result);
  });
};

exports.getBuildingById = function (buildingId, callback) {
  Building.getBuildingById(buildingId, function (result) {
    callback(result);
  });
};

exports.getAllBuildings = function (callback) {
  Building.getAllBuildings(function (result) {
    callback(result);
  });
};

exports.updateBuilding = function (buildingId, updatedBuilding, callback) {
  Building.updateBuilding(buildingId, updatedBuilding, function (result) {
    callback(result);
  });
};

exports.deleteBuilding = function (buildingId, callback) {
  Building.deleteBuilding(buildingId, function (result) {
    callback(result);
  });
};
