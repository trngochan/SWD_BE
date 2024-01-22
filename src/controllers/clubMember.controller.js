// clubMember.controller.js
const ClubMemberService = require("../services/clubMember.service");

exports.get_list = function (req, res) {
  ClubMemberService.getAllClubMembers(function (result) {
    if (result.status === "success") {
      res.status(200).json({ result: result.result });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};

exports.create = function (req, res) {
  const newClubMember = req.body;
  ClubMemberService.createClubMember(newClubMember, function (result) {
    if (result.status === "success") {
      res.status(200).json({ message: result.message });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};

exports.get_clubMember = function (req, res) {
  const clubMemberId = req.params.id;
  ClubMemberService.getClubMemberById(clubMemberId, function (result) {
    if (result.status === "success") {
      res.status(200).json({ result: result.result });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};

exports.update_clubMember = function (req, res) {
  const clubMemberId = req.params.id;
  const updatedClubMember = req.body;
  ClubMemberService.updateClubMember(clubMemberId, updatedClubMember, function (result) {
    if (result.status === "success") {
      res.status(200).json({ message: result.message });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};

exports.delete_clubMember = function (req, res) {
  const clubMemberId = req.params.id;
  ClubMemberService.deleteClubMember(clubMemberId, function (result) {
    if (result.status === "success") {
      res.status(200).json({ message: result.message });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};
