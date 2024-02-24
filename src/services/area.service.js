const Area = require("../models/area.model");

exports.createArea = function (newArea, callback) {
  Area.createArea(newArea, function (result) {
    callback(result);
  });
};

exports.getByYardId = function (yardId, callback) {
  Area.getByYardId(yardId, callback);
};

exports.getAreaById = function (areaId, callback) {
  Area.getAreaById(areaId, function (result) {
    callback(result);
  });
};

exports.getAllAreas = function (callback) {
  Area.getAllAreas(function (result) {
    callback(result);
  });
};

exports.updateArea = function (areaId, updatedArea, callback) {
  Area.updateArea(areaId, updatedArea, function (result) {
    callback(result);
  });
};

exports.deleteArea = function (areaId, callback) {
  Area.deleteArea(areaId, function (result) {
    callback(result);
  });
};

// Các hàm khác cho service Area
