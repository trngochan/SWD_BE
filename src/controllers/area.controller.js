const AreaService = require("../services/area.service");

exports.create_area = function (req, res) {
  const newArea = req.body;
  AreaService.createArea(newArea, function (result) {
    if (result.status === "success") {
      res.status(201).json({ message: result.message });
    } else if (result.status === "error") {
      res.status(400).json({ message: result.message });
    }
  });
};

exports.get_area = function (req, res) {
  const areaId = req.params.id;
  AreaService.getAreaById(areaId, function (result) {
    if (result.status === "success") {
      res.status(200).json({ result: result.result });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};

exports.get_all_areas = function (req, res) {
  AreaService.getAllAreas(function (result) {
    if (result.status === "success") {
      res.status(200).json({ result: result.result });
    } else if (result.status === "error") {
      res.status(500).json({ message: result.message });
    }
  });
};

exports.update_area = function (req, res) {
  const areaId = req.params.id;
  const updatedArea = req.body;
  AreaService.updateArea(areaId, updatedArea, function (result) {
    if (result.status === "success") {
      res.status(200).json({ message: result.message });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};

exports.delete_area = function (req, res) {
  const areaId = req.params.id;
  AreaService.deleteArea(areaId, function (result) {
    if (result.status === "success") {
      res.status(200).json({ message: result.message });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};
