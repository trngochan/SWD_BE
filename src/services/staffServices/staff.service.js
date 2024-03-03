const Staff = require("../../models/staff.model");
exports.getManagedClubs = function (staffId,callback) {
    Staff.getManagedClubs(staffId, callback);
};

exports.manageClub = function (staffId,clubId, callback) {
    Staff.manageClub(staffId,clubId, callback);
};

