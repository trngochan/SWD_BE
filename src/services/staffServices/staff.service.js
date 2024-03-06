const Staff = require("../../models/staff.model");
const ClubMember = require("../../models/clubMember.model");

exports.getManagedClubs = function (staffId,callback) {
    Staff.getManagedClubs(staffId, callback);
};

exports.getAllMembersByClubId = function (clubId,callback) {
    ClubMember.getClubMembersDetailByClubId(clubId, callback);
};

