const Club = require("../../models/club.model");
const Staff = require("../../models/staff.model");
exports.approveClub = function (clubId, callback) {
    Club.approveClub(clubId, callback);
};

exports.rejectClub = function (clubId, callback) {
  Club.rejectClub(clubId, callback);
};

exports.createStaff = function (newStaff, callback) {
    Staff.createStaff(newStaff, function (result) {
      callback(result);
    });
  };
  
  exports.getStaffByEmail = function (staffEmail, callback) {
    Staff.getStaffByEmail(staffEmail, function (result) {
      callback(result);
    });
  };
  
  exports.getAllStaffs = function (callback) {
    Staff.getAllStaffs(function (result) {
      callback(result);
    });
  };
  
  exports.updateStaff = function (staffId, updatedStaff, callback) {
    Staff.updateStaff(staffId, updatedStaff, function (result) {
      callback(result);
    });
  };
  
  exports.deleteStaff = function (staffId, callback) {
    Staff.deleteStaff(staffId, function (result) {
      callback(result);
    });
  };