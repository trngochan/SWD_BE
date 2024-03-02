const AdminService = require("../../services/adminServices/admin.service");

exports.approve_club = function (req, res) {
    const clubId = req.params.id;
    AdminService.approveClub(clubId, function (result) {
      if (result.status === "success") {
        res.status(201).json({ message: result.message });
      } else if (result.status === "error") {
        res.status(400).json({ message: result.message });
      }
    });
  };

  exports.approve_sport = function (req, res) {
    const sportId = req.params.id;
    AdminService.approveSport(sportId, function (result) {
      if (result.status === "success") {
        res.status(201).json({ message: result.message });
      } else if (result.status === "error") {
        res.status(400).json({ message: result.message });
      }
    });
  };