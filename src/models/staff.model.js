const db = require("../common/connect");

const Staff = function (staff) {
  this.id = staff.id;
  this.username = staff.username;
  this.password = staff.password;
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

module.exports = Staff;
