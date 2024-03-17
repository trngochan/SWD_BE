const db = require("../common/connect");

const Club = function (club) {
  this.id = club.id;
  this.name = club.name;
  this.decription = club.decription;
  this.countMember = club.countMember;
  this.sportName = club.sportName;
  this.sportId = club.sportId;
  this.staffId = club.staffId;
  this.status = club.status;
  this.approveStatus = club.approveStatus;
  this.dateTime = club.dateTime;
};

Club.addMember = function (idClub, callback) {
  try {
    db.query(
      "UPDATE Club SET countMember = countMember + 1 WHERE id = ?",
      idClub,
      function (err, result) {
        if (err) {
          console.error(err);
          callback({
            status: "error",
            message: "Error updating countMember",
          });
        } else {
          // Kiểm tra xem có dòng nào bị ảnh hưởng bởi truy vấn UPDATE hay không
          if (result.affectedRows > 0) {
            callback({ status: "success" });
          } else {
            callback({ status: "error", message: "Club not found" });
          }
        }
      }
    );
  } catch (error) {
    console.error(error);
    callback({ status: "error", message: "Error updating countMember" });
  }
};

Club.removeMember = function (idClub, callback) {
  try {
    db.query(
      "UPDATE Club SET countMember = countMember - 1 WHERE id = ? AND countMember > 0",
      idClub,
      function (err, result) {
        if (err) {
          console.error(err);
          callback({
            status: "error",
            message: "Error updating countMember",
          });
        } else {
          // Kiểm tra xem có dòng nào bị ảnh hưởng bởi truy vấn UPDATE hay không
          if (result.affectedRows > 0) {
            callback({ status: "success" });
          } else {
            callback({
              status: "error",
              message: "Club not found or countMember already at 0",
            });
          }
        }
      }
    );
  } catch (error) {
    console.error(error);
    callback({ status: "error", message: "Error updating countMember" });
  }
};

Club.getAllClubs = function (callback) {
  try {
    db.query("SELECT * FROM Club", function (err, result) {
      if (err) {
        console.error(err);
        callback({ status: "error", message: "Club get all fail" });
      } else {
        callback({
          status: "success",
          result: result,
        });
      }
    });
  } catch (error) {
    callback({ status: "error", message: "Club get all fail" });
  }
};

Club.getClubById = function (clubId, callback) {
  try {
    db.query("SELECT * FROM Club WHERE id = ?", clubId, function (err, result) {
      if (err) {
        console.error(err);
        callback({ status: "error", message: "Error getting club by ID" });
      } else {
        if (result.length > 0) {
          // Nếu có dữ liệu trả về
          callback({ status: "success", result: result[0] });
        } else {
          // Nếu không có dữ liệu
          callback({ status: "error", message: "Club not found" });
        }
      }
    });
  } catch (error) {
    console.error(error);
    callback({ status: "error", message: "Error getting club by ID" });
  }
};

Club.createClub = function (newClub, staffId, callback) {
  newClub.countMember = 0;
  newClub.staffId = staffId;
  newClub.approveStatus = 0;
  newClub.status = 1;
  try {
    db.query("INSERT INTO Club SET ?", newClub, function (err, result) {
      if (err) {
        console.error(err);
        callback({ status: "error", message: "Error creating club" });
      } else {
        callback({
          status: "success",
          message: "Created club successfully",
        });
      }
    });
  } catch (error) {
    callback({ status: "error", message: "Error creating club" });
  }
};

Club.updateClub = function (clubId, updatedClub, callback) {
  try {
    db.query(
      "UPDATE Club SET ? WHERE id = ?",
      [updatedClub, clubId],
      function (err, result) {
        if (err) {
          console.log(err);
          callback({ status: "error", message: "Error updating club" });
        } else {
          if (result.affectedRows > 0) {
            callback({
              status: "success",
              message: "Club updated successfully",
            });
          } else {
            callback({ status: "error", message: "Club not found" });
          }
        }
      }
    );
  } catch (error) {
    callback({ status: "error", message: "An error occurred" });
  }
};

Club.deleteClub = function (clubId, callback) {
  console.log(clubId);
  try {
    db.query(
      "UPDATE Club SET status = 0 WHERE id = ?",
      [clubId],
      function (err, result) {
        console.log(result);
        if (result.affectedRows > 0) {
          callback({
            status: "success",
            message: "Club deleted successfully",
          });
        } else {
          callback({ status: "error", message: "Club deleted fail" });
        }
      }
    );
  } catch (error) {
    callback({ status: "error", message: "Failed to delete club" });
  }
};

Club.getClubByEmail = function (email, callback) {
  try {
    db.query(
      "SELECT * FROM Club WHERE email = ?",
      email,
      function (err, result) {
        if (err) {
          console.error(err);
          callback({
            status: "error",
            message: "Error getting club by email",
          });
        } else {
          if (result.length > 0) {
            // Nếu có dữ liệu trả về
            callback({ status: "success", result: result[0] });
          } else {
            // Nếu không có dữ liệu
            callback({ status: "error", message: "Club not found" });
          }
        }
      }
    );
  } catch (error) {
    console.error(error);
    callback({ status: "error", message: "Error getting club by email" });
  }
};

Club.approveClub = function (clubId, callback) {
  try {
    db.query(
      "UPDATE Club SET approveStatus = 1 WHERE id = ?",
      clubId,
      function (err, result) {
        if (err || result.affectedRows === 0) {
          callback({
            status: "error",
            message: "Error approving club or club not found",
          });
        } else {
          callback({
            status: "success",
            message: "Club approved successfully",
          });
        }
      }
    );
  } catch (error) {
    callback({ status: "error", message: "Error approving club" });
  }
};

Club.rejectClub = function (clubId, callback) {
  try {
    db.query(
      "UPDATE Club SET approveStatus = 2 WHERE id = ?",
      clubId,
      function (err, result) {
        if (err || result.affectedRows === 0) {
          callback({
            status: "error",
            message: "Error approving club or club not found",
          });
        } else {
          callback({
            status: "success",
            message: "Club approved successfully",
          });
        }
      }
    );
  } catch (error) {
    callback({ status: "error", message: "Error approving club" });
  }
};

Club.getClubsByStaffId = function (staffId, callback) {
  try {
    db.query(
      "SELECT * FROM Club WHERE staffId = ?",
      staffId,
      function (err, result) {
        if (err) {
          console.error(err);
          callback({
            status: "error",
            message: "Error getting clubs by staffId",
          });
        } else {
          callback({
            status: "success",
            result: result,
          });
        }
      }
    );
  } catch (error) {
    console.error(error);
    callback({ status: "error", message: "Error getting clubs by staffId" });
  }
};

module.exports = Club;
