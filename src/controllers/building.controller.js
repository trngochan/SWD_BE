const BuildingService = require("../services/building.service");

exports.create_building = function (req, res) {
  const newBuilding = req.body;
  BuildingService.createBuilding(newBuilding, function (result) {
    if (result.status === "success") {
      res.status(201).json({ message: result.message });
    } else if (result.status === "error") {
      res.status(400).json({ message: result.message });
    }
  });
};

exports.get_building = function (req, res) {
  const buildingId = req.params.id;
  BuildingService.getBuildingById(buildingId, function (result) {
    if (result.status === "success") {
      res.status(200).json({ result: result.result });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};

exports.get_all_buildings = function (req, res) {
  const filters = req.query;

  BuildingService.getAllBuildings(filters, function (result) {
    if (result.status === "success") {
      res.status(200).json({ result: result.result });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};

exports.update_building = function (req, res) {
  const buildingId = req.params.id;
  const updatedBuilding = req.body;
  BuildingService.updateBuilding(
    buildingId,
    updatedBuilding,
    function (result) {
      if (result.status === "success") {
        res.status(200).json({ message: result.message });
      } else if (result.status === "error") {
        res.status(404).json({ message: result.message });
      }
    }
  );
};

exports.delete_building = function (req, res) {
  const buildingId = req.params.id;
  BuildingService.deleteBuilding(buildingId, function (result) {
    if (result.status === "success") {
      res.status(200).json({ message: result.message });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};
