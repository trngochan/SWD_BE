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
  const newClubMemSlot = req.body.newClubMemSlot;
  const inforWallet = req.body.inforWallet;
  const tranPoint = req.body.tranPoint;
  console.log(req.body);
  ClubMemSlotService.createClubMemSlot(
    newClubMemSlot,
    inforWallet,
    tranPoint,
    function (result) {
      if (result.status === "success") {
        res.status(200).json({ message: result.message });
      } else if (result.status === "error") {
        res.status(404).json({ message: result.message });
      }
    }
  );
};

exports.comfirm_joining = function (req, res) {
  const clubMemId = req.params.idclubmem;
  const SlotId = req.params.idslot;
  const tranPoint = req.body.tranPoint;
  const memberId = req.body.memberId;
  console.log(req.body);
  ClubMemSlotService.comfirm_joining(
    clubMemId,
    SlotId,
    tranPoint,
    memberId,
    function (result) {
      if (result.status === "success") {
        res.status(200).json({ message: result.message });
      } else if (result.status === "error") {
        res.status(404).json({ message: result.message });
      }
    }
  );
};

exports.comfirm_no_joining = function (req, res) {
  const clubMemId = req.params.idclubmem;
  const SlotId = req.params.idslot;
  ClubMemSlotService.comfirm_no_joining(clubMemId, SlotId, function (result) {
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
