// club.controller.js
const ClubService = require("../services/club.service");

exports.get_list = function (req, res) {
  ClubService.getAllClubs(function (result) {
    if (result.status === "success") {
      res.status(200).json({ result: result.result });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};

exports.create = function (req, res) {
  const newClub = req.body;
  ClubService.createClub(newClub, function (result) {
    if (result.status === "success") {
      res.status(200).json({ message: result.message });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};

exports.get_club = function (req, res) {
  const clubId = req.params.id;
  ClubService.getClubById(clubId, function (result) {
    if (result.status === "success") {
      res.status(200).json({ result: result.result });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};

exports.update_club = function (req, res) {
  const clubId = req.params.id;
  const updatedClub = req.body;
  ClubService.updateClub(clubId, updatedClub, function (result) {
    if (result.status === "success") {
      res.status(200).json({ message: result.message });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};

exports.delete_club = function (req, res) {
  const clubId = req.params.id;
  ClubService.deleteClub(clubId, function (result) {
    if (result.status === "success") {
      res.status(200).json({ message: result.message });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};
