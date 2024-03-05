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

  exports.approve_staff = function (req, res) {
    const staffId = req.params.id;
    AdminService.approveStaff(staffId, function (result) {
      if (result.status === "success") {
        res.status(201).json({ message: result.message });
      } else if (result.status === "error") {
        res.status(400).json({ message: result.message });
      }
    });
  };

  exports.create_staff = function (req, res) {
    const newStaff = req.body;
    AdminService.createStaff(newStaff, function (result) {
      if (result.status === "success") {
        res.status(200).json({ message: result.message });
      } else if (result.status === "error") {
        res.status(404).json({ message: result.message });
      }
    });
  };
  
  exports.get_staff = function (req, res) {
    const staffId = req.params.id;
    AdminService.getStaffById(staffId, function (result) {
      if (result.status === "success") {
        res.status(200).json({ result: result.result });
      } else if (result.status === "error") {
        res.status(404).json({ message: result.message });
      }
    });
  };
  
  exports.get_all_staffs = function (req, res) {
    AdminService.getAllStaffs(function (result) {
      if (result.status === "success") {
        res.status(200).json({ result: result.result });
      } else if (result.status === "error") {
        res.status(404).json({ message: result.message });
      }
    });
  };
  
  exports.update_staff = function (req, res) {
    const staffId = req.params.id;
    const updatedStaff = req.body;
    AdminService.updateStaff(staffId, updatedStaff, function (result) {
      if (result.status === "success") {
        res.status(200).json({ message: result.message });
      } else if (result.status === "error") {
        res.status(404).json({ message: result.message });
      }
    });
  };
  
  exports.delete_staff = function (req, res) {
    const staffId = req.params.id;
    AdminService.deleteStaff(staffId, function (result) {
      if (result.status === "success") {
        res.status(200).json({ message: result.message });
      } else if (result.status === "error") {
        res.status(404).json({ message: result.message });
      }
    });
  };
  