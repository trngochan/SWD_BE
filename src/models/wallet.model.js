const db = require("../common/connect");

const Wallet = function (wallet) {
  this.id = wallet.id;
  this.memberId = wallet.memberId;
  this.memberName = wallet.memberName;
  this.point = wallet.point;
  this.status = wallet.status;
  this.dateTime = wallet.dateTime;
  this.column = wallet.column; // Lưu ý: Tên cột mới được thêm vào
};

Wallet.getAllWallets = function (callback) {
  try {
    db.query("SELECT * FROM Wallet", function (err, result) {
      if (err) {
        console.error(err);
        callback({ status: "error", message: "Wallet get all fail" });
      } else {
        callback({
          status: "success",
          result: result,
        });
      }
    });
  } catch (error) {
    callback({ status: "error", message: "Wallet get all fail" });
  }
};

Wallet.getWalletById = function (walletId, callback) {
  try {
    db.query(
      "SELECT * FROM Wallet WHERE id = ?",
      walletId,
      function (err, result) {
        if (err) {
          console.error(err);
          callback({ status: "error", message: "Error getting wallet by ID" });
        } else {
          if (result.length > 0) {
            // Nếu có dữ liệu trả về
            callback({ status: "success", result: result[0] });
          } else {
            // Nếu không có dữ liệu
            callback({ status: "error", message: "Wallet not found" });
          }
        }
      }
    );
  } catch (error) {
    console.error(error);
    callback({ status: "error", message: "Error getting wallet by ID" });
  }
};

Wallet.getByMemberid = function (memberId, callback) {
  try {
    db.query(
      "SELECT * FROM Wallet WHERE memberId = ? and status = 1",
      memberId,
      function (err, result) {
        if (err) {
          console.error(err);
          callback({ status: "error", message: "Error getting wallet by ID" });
        } else {
          if (result.length > 0) {
            // Nếu có dữ liệu trả về
            callback({ status: "success", result: result[0] });
          } else {
            // Nếu không có dữ liệu
            callback({ status: "error", message: "Wallet not found" });
          }
        }
      }
    );
  } catch (error) {
    console.error(error);
    callback({ status: "error", message: "Error getting wallet by ID" });
  }
};

Wallet.createWallet = function (newWallet, callback) {
  try {
    db.query("INSERT INTO Wallet SET ?", newWallet, function (err, result) {
      if (err) {
        callback({ status: "error", message: "Error creating wallet" });
      } else {
        callback({
          status: "success",
          message: "Created wallet successfully",
        });
      }
    });
  } catch (error) {
    callback({ status: "error", message: "Error creating wallet" });
  }
};

Wallet.addPoint = function (data, callback) {
  const idWallet = data.walletId;
  const tranPoint = data.point;

  try {
    // Sử dụng câu truy vấn SQL UPDATE để cập nhật thuộc tính point
    db.query(
      "UPDATE Wallet SET point = point + ? WHERE id = ?",
      [tranPoint, idWallet],
      function (err, result) {
        if (err) {
          callback({ status: "error", message: "Error updating wallet" });
        } else {
          callback({
            status: "success",
            message: "Updated wallet successfully",
          });
        }
      }
    );
  } catch (error) {
    callback({ status: "error", message: "Error updating wallet" });
  }
};

Wallet.decreaPoint = function (data, callback) {
  const idWallet = data.walletId;
  const tranPoint = data.point;

  console.log({
    walletId: idWallet,
    point: tranPoint,
  });

  try {
    // Sử dụng câu truy vấn SQL UPDATE để cập nhật thuộc tính point
    db.query(
      "UPDATE Wallet SET point = point - ? WHERE id = ?",
      [tranPoint, idWallet],
      function (err, result) {
        if (err) {
          callback({ status: "error", message: "Error updating wallet" });
        } else {
          callback({
            status: "success",
            message: "Updated wallet successfully",
          });
        }
      }
    );
  } catch (error) {
    callback({ status: "error", message: "Error updating wallet" });
  }
};
Wallet.updateWallet = function (walletId, updatedWallet, callback) {
  try {
    db.query(
      "UPDATE Wallet SET ? WHERE id = ?",
      [updatedWallet, walletId],
      function (err, result) {
        if (err) {
          callback({ status: "error", message: "Error updating wallet" });
        } else {
          if (result.affectedRows > 0) {
            callback({
              status: "success",
              message: "Wallet updated successfully",
            });
          } else {
            callback({ status: "error", message: "Wallet not found" });
          }
        }
      }
    );
  } catch (error) {
    callback({ status: "error", message: "An error occurred" });
  }
};

Wallet.deleteWallet = function (walletId, callback) {
  try {
    db.query(
      "DELETE FROM Wallet WHERE id = ?",
      [walletId],
      function (err, result) {
        if (result.affectedRows > 0) {
          callback({
            status: "success",
            message: "Wallet deleted successfully",
          });
        } else {
          callback({ status: "error", message: "Wallet deleted fail" });
        }
      }
    );
  } catch (error) {
    callback({ status: "error", message: "Failed to delete wallet" });
  }
};

module.exports = Wallet;
