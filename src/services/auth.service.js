// auth.service.js
const Member = require("../models/member.model");
const jwt = require("jsonwebtoken");

exports.login = function (email, password, callback) {
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
            email: member.email,
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
