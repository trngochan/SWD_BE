// auth.controller.js
const AuthService = require("../services/auth.service");

exports.login = function (req, res) {
  const { email, password } = req.body;
  AuthService.login(email, password, function (data) {
    if (data.status === "success") {
      // Đăng nhập thành công, trả về token hoặc thông tin người dùng
      res.send({ token: data.token, user: data.user });
    } else {
      // Đăng nhập thất bại, trả về thông báo lỗi
      res.status(401).send({ message: data.message });
    }
  });
};

exports.logout = function (req, res) {
  // TODO: Thực hiện các thao tác cần thiết để đăng xuất
  res.send({ message: "Đăng xuất thành công" });
};
