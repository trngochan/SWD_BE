const db = require("../common/connect");

const TransactionHistoryPoint = function (transactionHistoryPoint) {
  this.id = transactionHistoryPoint.id;
  this.walletID = transactionHistoryPoint.walletID;
  this.ClubMemSlotId = transactionHistoryPoint.ClubMemSlotId;
  this.InitialPoint = transactionHistoryPoint.InitialPoint;
  this.transactionPointId = transactionHistoryPoint.transactionPointId;
  this.transactionPoint = transactionHistoryPoint.transactionPoint;
  this.dateTime = transactionHistoryPoint.dateTime;
  this.status = transactionHistoryPoint.status;
};

TransactionHistoryPoint.getAllTransactionHistoryPoints = function (callback) {
  try {
    db.query("SELECT * FROM TransactionHistoryPoint", function (err, result) {
      if (err) {
        console.error(err);
        callback({ status: "error", message: "TransactionHistoryPoint get all fail" });
      } else {
        callback({
          status: "success",
          result: result,
        });
      }
    });
  } catch (error) {
    callback({ status: "error", message: "TransactionHistoryPoint get all fail" });
  }
};

TransactionHistoryPoint.getTransactionHistoryPointById = function (transactionHistoryPointId, callback) {
  try {
    db.query(
      "SELECT * FROM TransactionHistoryPoint WHERE id = ?",
      transactionHistoryPointId,
      function (err, result) {
        if (err) {
          console.error(err);
          callback({ status: "error", message: "Error getting transactionHistoryPoint by ID" });
        } else {
          if (result.length > 0) {
            // Nếu có dữ liệu trả về
            callback({ status: "success", result: result[0] });
          } else {
            // Nếu không có dữ liệu
            callback({ status: "error", message: "TransactionHistoryPoint not found" });
          }
        }
      }
    );
  } catch (error) {
    console.error(error);
    callback({ status: "error", message: "Error getting transactionHistoryPoint by ID" });
  }
};

TransactionHistoryPoint.createTransactionHistoryPoint = function (newTransactionHistoryPoint, callback) {
  newTransactionHistoryPoint.status=1;
  newTransactionHistoryPoint.dateTime= new Date();
  console.log(newTransactionHistoryPoint);
  try {
    db.query("INSERT INTO TransactionHistoryPoint SET ?", newTransactionHistoryPoint, function (err, result) {
      if (err) {
        callback({ status: "error", message: "Error creating transactionHistoryPoint" });
      } else {
        callback({
          status: "success",
          message: "Created transactionHistoryPoint successfully",
        });
      }
    });
  } catch (error) {
    callback({ status: "error", message: "Error creating transactionHistoryPoint" });
  }
};

TransactionHistoryPoint.updateTransactionHistoryPoint = function (transactionHistoryPointId, updatedTransactionHistoryPoint, callback) {
  try {
    db.query(
      "UPDATE TransactionHistoryPoint SET ? WHERE id = ?",
      [updatedTransactionHistoryPoint, transactionHistoryPointId],
      function (err, result) {
        if (err) {
          callback({ status: "error", message: "Error updating transactionHistoryPoint" });
        } else {
          if (result.affectedRows > 0) {
            callback({
              status: "success",
              message: "TransactionHistoryPoint updated successfully",
            });
          } else {
            callback({ status: "error", message: "TransactionHistoryPoint not found" });
          }
        }
      }
    );
  } catch (error) {
    callback({ status: "error", message: "An error occurred" });
  }
};

TransactionHistoryPoint.deleteTransactionHistoryPoint = function (transactionHistoryPointId, callback) {
  try {
    db.query(
      "UPDATE TransactionHistoryPoint SET status = 0 WHERE id = ?",
      [transactionHistoryPointId],
      function (err, result) {
        if (result.affectedRows > 0) {
          callback({
            status: "success",
            message: "TransactionHistoryPoint deleted successfully",
          });
        } else {
          callback({ status: "error", message: "TransactionHistoryPoint deleted fail" });
        }
      }
    );
  } catch (error) {
    callback({ status: "error", message: "Failed to delete transactionHistoryPoint" });
  }
};

module.exports = TransactionHistoryPoint;
