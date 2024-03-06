const db = require("../common/connect");

const Staff = function (staff) {
  this.id = staff.id;
  this.name = staff.name;
  this.email = staff.email;
  this.password = staff.password;
  this.image = staff.image;
  this.gender = staff.gender;
  this.status = staff.status;
  this.dateTime = staff.dateTime;
};

Staff.createStaff = function (newStaff, callback) {
  newStaff.status=1;
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
    db.query(
      "UPDATE Staff SET status = 0 WHERE id = ?",
      [staffId],
      function (err, result) {
        if (result.affectedRows > 0) {
          callback({
            status: "success",
            message: "Staff deleted successfully",
          });
        } else {
          callback({ status: "error", message: "Staff deleted fail" });
        }
      }
    );
  } catch (error) {
    callback({ status: "error", message: "Failed to delete staff" });
  }
};

Staff.getStaffByEmail = function (email, callback) {
  try {
    db.query(
      "SELECT * FROM Staff WHERE email = ?",
      email, // Sử dụng prepared statements
      function (err, result) {
        if (err) {
          console.error(err);
          return callback({
            status: "error",
            message: "Error getting staff by email",
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
      "SELECT * FROM Club WHERE staffId = ?",
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



module.exports = Staff;
