const db = require("../common/connect");

const Admin = function (admin) {
  this.id = admin.id;
  this.username = admin.username;
  this.password = admin.password;
  // Thêm các trường khác của admin nếu cần
};

Admin.getByUsername = function (username, callback) {
  try {
    db.query(
      "SELECT * FROM Admin WHERE username = ?",
      username, // Sử dụng prepared statements
      function (err, result) {
        if (err) {
          console.error(err);
          return callback({
            status: "error",
            message: "Error getting admin by username",
          });
        }

        if (result.length > 0) {
          // Nếu có dữ liệu trả về
          callback({ status: "success", result: result[0] });
        } else {
          // Nếu không có dữ liệu
          callback({ status: "error", message: "Admin not found" });
        }
      }
    );
  } catch (error) {
    console.error(error);
    callback({ status: "error", message: "Error getting admin by username" });
  }
};

module.exports = Admin;
