// auth.controller.js
const AuthService = require("../services/auth.service");
const MemberService = require("../services/member.service");

exports.login_member = function (req, res) {
  const { email, password } = req.body;
  AuthService.login_member(email, password, function (data) {
    if (data.status === "success") {
      // Đăng nhập thành công, trả về token hoặc thông tin người dùng
      res.send({ token: data.token, user: data.user });
    } else {
      // Đăng nhập thất bại, trả về thông báo lỗi
      res.status(401).send({ message: data.message });
    }
  });
};

exports.login_admin = function (req, res) {
  const { username, password } = req.body;
  AuthService.login_admin(username, password, function (data) {
    if (data.status === "success") {
      // Đăng nhập thành công, trả về token hoặc thông tin người dùng
      res.send({ token: data.token, user: data.user });
    } else {
      // Đăng nhập thất bại, trả về thông báo lỗi
      res.status(401).send({ message: data.message });
    }
  });
};

exports.registerMember = function (req, res) {
  const newMember = req.body;

  // Gọi service để xử lý đăng ký thành viên
  MemberService.createMember(newMember, (result) => {
    res.status(result.status === "success" ? 200 : 400).json(result);
  });
};

exports.logout = function (req, res) {
  // TODO: Thực hiện các thao tác cần thiết để đăng xuất
  res.status(200).json({ message: "Đăng xuất thành công" });
};
