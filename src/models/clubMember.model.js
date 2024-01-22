const db = require("../common/connect");

const ClubMember = function (clubMember) {
  this.id = clubMember.id;
  this.memberID = clubMember.memberID;
  this.memberName = clubMember.memberName;
  this.clubID = clubMember.clubID;
  this.clubName = clubMember.clubName;
  this.status = clubMember.status;
  this.dateTime = clubMember.dateTime;
};

ClubMember.getAllClubMembers = function (callback) {
  try {
    db.query("SELECT * FROM ClubMember", function (err, result) {
      if (err) {
        console.error(err);
        callback({ status: "error", message: "ClubMember get all fail" });
      } else {
        callback({
          status: "success",
          result: result,
        });
      }
    });
  } catch (error) {
    callback({ status: "error", message: "ClubMember get all fail" });
  }
};

ClubMember.getClubMemberById = function (clubMemberId, callback) {
  try {
    db.query(
      "SELECT * FROM ClubMember WHERE id = ?",
      clubMemberId,
      function (err, result) {
        if (err) {
          console.error(err);
          callback({ status: "error", message: "Error getting clubMember by ID" });
        } else {
          if (result.length > 0) {
            // Nếu có dữ liệu trả về
            callback({ status: "success", result: result[0] });
          } else {
            // Nếu không có dữ liệu
            callback({ status: "error", message: "ClubMember not found" });
          }
        }
      }
    );
  } catch (error) {
    console.error(error);
    callback({ status: "error", message: "Error getting clubMember by ID" });
  }
};

ClubMember.createClubMember = function (newClubMember, callback) {
  console.log(newClubMember);
  try {
    db.query("INSERT INTO ClubMember SET ?", newClubMember, function (err, result) {
      if (err) {
        callback({ status: "error", message: "Error creating clubMember" });
      } else {
        callback({
          status: "success",
          message: "Created clubMember successfully",
        });
      }
    });
  } catch (error) {
    callback({ status: "error", message: "Error creating clubMember" });
  }
};

ClubMember.updateClubMember = function (clubMemberId, updatedClubMember, callback) {
  try {
    db.query(
      "UPDATE ClubMember SET ? WHERE id = ?",
      [updatedClubMember, clubMemberId],
      function (err, result) {
        if (err) {
          callback({ status: "error", message: "Error updating clubMember" });
        } else {
          if (result.affectedRows > 0) {
            callback({
              status: "success",
              message: "ClubMember updated successfully",
            });
          } else {
            callback({ status: "error", message: "ClubMember not found" });
          }
        }
      }
    );
  } catch (error) {
    callback({ status: "error", message: "An error occurred" });
  }
};

ClubMember.deleteClubMember = function (clubMemberId, callback) {
  try {
    db.query(
      "UPDATE ClubMember SET status = 0 WHERE id = ?",
      [clubMemberId],
      function (err, result) {
        if (result.affectedRows > 0) {
          callback({
            status: "success",
            message: "ClubMember deleted successfully",
          });
        } else {
          callback({ status: "error", message: "ClubMember deleted fail" });
        }
      }
    );
  } catch (error) {
    callback({ status: "error", message: "Failed to delete clubMember" });
  }
};

ClubMember.getClubMemberByEmail = function (email, callback) {
  try {
    db.query(
      "SELECT * FROM ClubMember WHERE email = ?",
      email,
      function (err, result) {
        if (err) {
          console.error(err);
          callback({
            status: "error",
            message: "Error getting clubMember by email",
          });
        } else {
          if (result.length > 0) {
            // Nếu có dữ liệu trả về
            callback({ status: "success", result: result[0] });
          } else {
            // Nếu không có dữ liệu
            callback({ status: "error", message: "ClubMember not found" });
          }
        }
      }
    );
  } catch (error) {
    console.error(error);
    callback({ status: "error", message: "Error getting clubMember by email" });
  }
};

module.exports = ClubMember;
