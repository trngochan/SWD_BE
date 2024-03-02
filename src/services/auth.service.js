// auth.service.js
const Member = require("../models/member.model");
const Admin = require("../models/admin.model");
const Staff = require("../models/staff.model");
const jwt = require("jsonwebtoken");

exports.login_member = function (email, password, callback) {
  Member.getMemberByEmail(email, function (result) {
    if (result.status === "success") {
      const member = result.result;

      // Kiểm tra mật khẩu
      if (member.password === password) {
        // Tạo token
        const token = jwt.sign({ memberId: member.id }, "your-secret-key", {
          expiresIn: "1h", // Thời gian hết hạn của token
        });

        callback({
          status: "success",
          token: token,
          user: {
            id: member.id,
            name: member.name,
            role: "user",
            email: member.email,
            image: member.image,
          },
        });
      } else {
        callback({ status: "error", message: "Mật khẩu không đúng" });
      }
    } else {
      callback({ status: "error", message: "Email không tồn tại" });
    }
  });
};

exports.login_admin = function (username, password, callback) {
  Admin.getByUsername(username, function (result) {
    if (result.status === "success") {
      const member = result.result;

      // Kiểm tra mật khẩu
      if (member.password === password) {
        // Tạo token
        const token = jwt.sign({ memberId: member.id }, "your-secret-key", {
          expiresIn: "1h", // Thời gian hết hạn của token
        });

        callback({
          status: "success",
          token: token,
          role: "admin",
          user: {
            id: member.id,
            name: member.name,
            username: member.username,
          },
        });
      } else {
        callback({ status: "error", message: "Mật khẩu không đúng" });
      }
    } else {
      callback({ status: "error", message: "Email không tồn tại" });
    }
  });
};

exports.login_staff = function (username, password, callback) {
  Staff.getByUsername(username, function (result) {
    if (result.status === "success") {
      const member = result.result;

      // Kiểm tra mật khẩu
      if (member.password === password) {
        // Tạo token
        const token = jwt.sign({ memberId: member.id }, "your-secret-key", {
          expiresIn: "1h", // Thời gian hết hạn của token
        });

        callback({
          status: "success",
          token: token,
          role: "staff",
          user: {
            id: member.id,
            name: member.name,
            username: member.username,
          },
        });
      } else {
        callback({ status: "error", message: "Mật khẩu không đúng" });
      }
    } else {
      callback({ status: "error", message: "Email không tồn tại" });
    }
  });
};
