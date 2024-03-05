const db = require("../common/connect");

const Staff = function (staff) {
  this.id = member.id;
  this.name = member.name;
  this.email = member.email;
  this.password = member.password;
  this.image = member.image;
  this.gender = member.gender;
  this.phoneNumber = member.phoneNumber;
  this.status = member.status;
  this.dateTime = member.dateTime;
};
Staff.createStaff = function (newStaff, callback) {
  newMember.status = 1;
  try {
    db.query("INSERT INTO Staff SET ?", newStaff, function (err, result) {
      if (err) {
        callback({ status: "error", message: "Error creating staff" });
      } else {
        callback({
          status: "success",
          message: "Created staff successfully",
        });
      }
    });
  } catch (error) {
    callback({ status: "error", message: "Error creating staff" });
  }
};

Staff.getStaffById = function (staffId, callback) {
  try {
    db.query(
      "SELECT * FROM Staff WHERE id = ?",
      staffId,
      function (err, result) {
        if (err) {
          callback({ status: "error", message: "Error getting staff by ID" });
        } else {
          if (result.length > 0) {
            // Nếu có dữ liệu trả về
            callback({ status: "success", result: result[0] });
          } else {
            // Nếu không có dữ liệu
            callback({ status: "error", message: "Staff not found" });
          }
        }
      }
    );
  } catch (error) {
    callback({ status: "error", message: "Error getting staff by ID" });
  }
};

Staff.getAllStaffs = function (callback) {
  try {
    db.query("SELECT * FROM Staff", function (err, result) {
      if (err) {
        callback({ status: "error", message: "Staff get all fail" });
      } else {
        callback({
          status: "success",
          result: result,
        });
      }
    });
  } catch (error) {
    callback({ status: "error", message: "Staff get all fail" });
  }
};

Staff.updateStaff = function (staffId, updatedStaff, callback) {
  try {
    db.query(
      "UPDATE Staff SET ? WHERE id = ?",
      [updatedStaff, staffId],
      function (err, result) {
        if (err) {
          callback({ status: "error", message: "Error updating staff" });
        } else {
          if (result.affectedRows > 0) {
            callback({
              status: "success",
              message: "Staff updated successfully",
            });
          } else {
            callback({ status: "error", message: "Staff not found" });
          }
        }
      }
    );
  } catch (error) {
    callback({ status: "error", message: "An error occurred" });
  }
};

Staff.deleteStaff = function (staffId, callback) {
  try {
    db.query("DELETE FROM Staff WHERE id = ?", staffId, function (err, result) {
      if (result.affectedRows > 0) {
        callback({
          status: "success",
          message: "Staff deleted successfully",
        });
      } else {
        callback({ status: "error", message: "Staff deleted fail" });
      }
    });
  } catch (error) {
    callback({ status: "error", message: "Failed to delete staff" });
  }
};

Staff.getByUsername = function (username, callback) {
  try {
    db.query(
      "SELECT * FROM Staff WHERE username = ?",
      username, // Sử dụng prepared statements
      function (err, result) {
        if (err) {
          console.error(err);
          return callback({
            status: "error",
            message: "Error getting staff by username",
          });
        }

        if (result.length > 0) {
          // Nếu có dữ liệu trả về
          callback({ status: "success", result: result[0] });
        } else {
          // Nếu không có dữ liệu
          callback({ status: "error", message: "Staff not found" });
        }
      }
    );
  } catch (error) {
    console.error(error);
    callback({ status: "error", message: "Error getting staff by username" });
  }
};

Staff.getManagedClubs = function (staffId, callback) {
  try {
    db.query(
      "SELECT * FROM Club INNER JOIN StaffClub ON Club.id = StaffClub.club_id WHERE StaffClub.staff_id = ?",
      staffId,
      function (err, result) {
        if (err) {
          console.error(err);
          return callback({
            status: "error",
            message: "Error getting managed clubs",
          });
        }

        callback({ status: "success", result: result });
      }
    );
  } catch (error) {
    console.error(error);
    callback({ status: "error", message: "Error getting managed clubs" });
  }
};

Staff.manageClub = function (staffId, clubId, callback) {
  try {
    // Kiểm tra xem staffId có tồn tại trong bảng Staff không
    db.query("SELECT * FROM Staff WHERE id = ?", staffId, function (err, staffResult) {
      if (err) {
        console.error(err);
        return callback({ status: "error", message: "Error checking staff existence" });
      }

      if (staffResult.length === 0) {
        return callback({ status: "error", message: "Staff not found" });
      }

      // Kiểm tra xem clubId có tồn tại trong bảng Club không
      db.query("SELECT * FROM Club WHERE id = ?", clubId, function (err, clubResult) {
        if (err) {
          console.error(err);
          return callback({ status: "error", message: "Error checking club existence" });
        }

        if (clubResult.length === 0) {
          return callback({ status: "error", message: "Club not found" });
        }

        // Nếu staffId và clubId tồn tại, thêm vào bảng StaffClub
        const newStaffClub = {
          staff_id: staffId,
          club_id: clubId
        };

        db.query("INSERT INTO StaffClub SET ?", newStaffClub, function (err, result) {
          if (err) {
            console.error(err);
            return callback({ status: "error", message: "Error managing club" });
          }

          callback({ status: "success", message: "Club managed successfully" });
        });
      });
    });
  } catch (error) {
  }
}

module.exports = Staff;
