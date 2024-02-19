// clubMemSlot.controller.js
const ClubMemSlotService = require("../services/clubMemSlot.service");

exports.get_list = function (req, res) {
  ClubMemSlotService.getAllClubMemSlots(function (result) {
    if (result.status === "success") {
      res.status(200).json({ result: result.result });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};

exports.create = function (req, res) {
  const newClubMemSlot = req.body;
  ClubMemSlotService.createClubMemSlot(newClubMemSlot, function (result) {
    if (result.status === "success") {
      res.status(200).json({ message: result.message });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};

exports.get_clubMemSlot = function (req, res) {
  const clubMemSlotId = req.params.id;
  ClubMemSlotService.getClubMemSlotById(clubMemSlotId, function (result) {
    if (result.status === "success") {
      res.status(200).json({ result: result.result });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};

exports.update_clubMemSlot = function (req, res) {
  const clubMemSlotId = req.params.id;
  const updatedClubMemSlot = req.body;
  ClubMemSlotService.updateClubMemSlot(clubMemSlotId, updatedClubMemSlot, function (result) {
    if (result.status === "success") {
      res.status(200).json({ message: result.message });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};

exports.delete_clubMemSlot = function (req, res) {
  const clubMemSlotId = req.params.id;
  ClubMemSlotService.deleteClubMemSlot(clubMemSlotId, function (result) {
    if (result.status === "success") {
      res.status(200).json({ message: result.message });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};