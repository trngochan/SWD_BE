// member.controller.js
const MemberService = require("../services/member.service");

exports.get_list = function (req, res) {
  const filters = req.query;
  MemberService.getAllMembers(filters, function (result) {
    if (result.status === "success") {
      res.status(200).json({ result: result.result });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};

exports.create = function (req, res) {
  const newMember = req.body;
  MemberService.createMember(newMember, function (result) {
    if (result.status === "success") {
      res.status(200).json({ message: result.message });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};

exports.get_member = function (req, res) {
  const memberId = req.params.id;
  MemberService.getMemberById(memberId, function (result) {
    if (result.status === "success") {
      res.status(200).json({ result: result.result });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};

exports.update_member = function (req, res) {
  const memberId = req.params.id;
  const updatedMember = req.body;
  MemberService.updateMember(memberId, updatedMember, function (result) {
    if (result.status === "success") {
      res.status(200).json({ message: result.message });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};

exports.delete_member = function (req, res) {
  const memberId = req.params.id;
  MemberService.deleteMember(memberId, function (result) {
    if (result.status === "success") {
      res.status(200).json({ message: result.message });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};
