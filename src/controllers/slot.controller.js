// slot.controller.js
const SlotService = require("../services/slot.service");

exports.get_list = function (req, res) {
  SlotService.getAllSlots(function (result) {
    if (result.status === "success") {
      res.status(200).json({ result: result.result });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};

exports.create = function (req, res) {
  const newSlot = req.body;
  SlotService.createSlot(newSlot, function (result) {
    if (result.status === "success") {
      res.status(200).json({ message: result.message });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};

exports.get_slot = function (req, res) {
  const slotId = req.params.id;
  SlotService.getSlotById(slotId, function (result) {
    if (result.status === "success") {
      res.status(200).json({ result: result.result });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};

exports.getByIdClub = function (req, res) {
  const clubId = req.params.id;
  SlotService.getByIdClub(clubId, function (result) {
    if (result.status === "success") {
      res.status(200).json({ result: result.result });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};

exports.getByIdClubMember = function (req, res) {
  const clubMemberId = req.params.idclubmember;
  SlotService.getByIdClubMember(clubMemberId, function (result) {
    if (result.status === "success") {
      res.status(200).json({ result: result.result });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};

exports.getJoinedByMember = function (req, res) {
  const clubMember = req.params.clubMember;
  SlotService.getJoinedByMember(clubMember, function (result) {
    if (result.status === "success") {
      res.status(200).json({ result: result.result });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};

exports.update_slot = function (req, res) {
  const slotId = req.params.id;
  const updatedSlot = req.body;
  SlotService.updateSlot(slotId, updatedSlot, function (result) {
    if (result.status === "success") {
      res.status(200).json({ message: result.message });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};

exports.delete_slot = function (req, res) {
  const slotId = req.params.id;
  SlotService.deleteSlot(slotId, function (result) {
    if (result.status === "success") {
      res.status(200).json({ message: result.message });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};
