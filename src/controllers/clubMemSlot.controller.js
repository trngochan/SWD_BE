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

exports.geSlotJoinedByClubMember = function (req, res) {
  const clubMem = req.params.clubmember;
  ClubMemSlotService.geSlotJoinedByClubMember(clubMem, function (result) {
    if (result.status === "success") {
      res.status(200).json({ result: result.result });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};

exports.getNumberOfSlot = function (req, res) {
  const SlotId = req.params.idslot;
  ClubMemSlotService.getNumberOfSlot(SlotId, function (result) {
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
  ClubMemSlotService.updateClubMemSlot(
    clubMemSlotId,
    updatedClubMemSlot,
    function (result) {
      if (result.status === "success") {
        res.status(200).json({ message: result.message });
      } else if (result.status === "error") {
        res.status(404).json({ message: result.message });
      }
    }
  );
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
