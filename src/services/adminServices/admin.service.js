const Club = require("../../models/club.model");
const Staff = require("../../models/staff.model");
exports.approveClub = function (clubId, callback) {
    Club.approveClub(clubId, callback);
};

StaffService.createStaff = function (newStaff, callback) {
    Staff.createStaff(newStaff, function (result) {
      callback(result);
    });
  };
  
  StaffService.getStaffById = function (staffId, callback) {
    Staff.getStaffById(staffId, function (result) {
      callback(result);
    });
  };
  
  StaffService.getAllStaffs = function (callback) {
    Staff.getAllStaffs(function (result) {
      callback(result);
    });
  };
  
  StaffService.updateStaff = function (staffId, updatedStaff, callback) {
    Staff.updateStaff(staffId, updatedStaff, function (result) {
      callback(result);
    });
  };
  
  StaffService.deleteStaff = function (staffId, callback) {
    Staff.deleteStaff(staffId, function (result) {
      callback(result);
    });
  };