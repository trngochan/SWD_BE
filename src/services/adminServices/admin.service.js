const Club = require("../../models/club.model");
const Sport = require("../../models/sport.model");
exports.approveClub = function (clubId, callback) {
    Club.approveClub(clubId, callback);
};

exports.approveSport = function (sportId, callback) {
    Sport.approveSport(sportId, callback);
};


module.exports = AdminService;
