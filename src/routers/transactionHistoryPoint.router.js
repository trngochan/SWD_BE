const express = require("express");
const router = express.Router();
const TransactionHistoryPointController = require("../controllers/transactionHistoryPoint.controller");

// Lấy danh sách tất cả thành viên
router.get(
  "/transactionHistoryPoints",
  TransactionHistoryPointController.get_list
);

// Tạo mới thành viên
router.post(
  "/transactionHistoryPoints",
  TransactionHistoryPointController.create
);

// get by id Wallet
router.get(
  "/transactionHistoryPoints/:idWallet/wallet",
  TransactionHistoryPointController.get_by_idWallet
);

// Lấy thông tin của một thành viên cụ thể
router.get(
  "/transactionHistoryPoints/:id",
  TransactionHistoryPointController.get_transactionHistoryPoint
);

// Cập nhật thông tin của một thành viên
router.put(
  "/transactionHistoryPoints/:id",
  TransactionHistoryPointController.update_transactionHistoryPoint
);

// Xóa một thành viên
router.delete(
  "/transactionHistoryPoints/:id",
  TransactionHistoryPointController.delete_transactionHistoryPoint
);

module.exports = router;
