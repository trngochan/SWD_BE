const Staff = require("../../models/staff.model");
exports.getManagedClubs = function (staffId,callback) {
    Staff.getManagedClubs(staffId, callback);
};


