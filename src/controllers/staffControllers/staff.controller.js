const StaffService = require("../../services/staffServices/staff.service");

exports.get_managed_clubs = function (req, res) {
    const staffId = req.params.id;
    StaffService.getManagedClubs(staffId, function (result) {
      if (result.status === "success") {
        res.status(201).json({ message: result.result });
      } else if (result.status === "error") {
        res.status(400).json({ message: result.message });
      }
    });
  };


