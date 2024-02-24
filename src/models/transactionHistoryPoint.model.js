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
    db.query(
      "SELECT * FROM TransactionHistoryPoint where status = 1",
      function (err, result) {
        if (err) {
          console.error(err);
          callback({
            status: "error",
            message: "TransactionHistoryPoint get all fail",
          });
        } else {
          callback({
            status: "success",
            result: result,
          });
        }
      }
    );
  } catch (error) {
    callback({
      status: "error",
      message: "TransactionHistoryPoint get all fail",
    });
  }
};

TransactionHistoryPoint.getTransactionHistoryPointById = function (
  transactionHistoryPointId,
  callback
) {
  try {
    db.query(
      "SELECT * FROM TransactionHistoryPoint WHERE id = ? and status = 1",
      transactionHistoryPointId,
      function (err, result) {
        if (err) {
          console.error(err);
          callback({
            status: "error",
            message: "Error getting transactionHistoryPoint by ID",
          });
        } else {
          if (result.length > 0) {
            // Nếu có dữ liệu trả về
            callback({ status: "success", result: result[0] });
          } else {
            // Nếu không có dữ liệu
            callback({
              status: "error",
              message: "TransactionHistoryPoint not found",
            });
          }
        }
      }
    );
  } catch (error) {
    console.error(error);
    callback({
      status: "error",
      message: "Error getting transactionHistoryPoint by ID",
    });
  }
};

TransactionHistoryPoint.get_by_idWallet = function (idWallet, callback) {
  try {
    db.query(
      "SELECT * FROM TransactionHistoryPoint WHERE walletId = ? and status = 1",
      idWallet,
      function (err, result) {
        if (err) {
          console.error(err);
          callback({
            status: "error",
            message: "Error getting transactionHistoryPoint by ID",
          });
        } else {
          // Nếu có dữ liệu trả về
          callback({ status: "success", result: result });
        }
      }
    );
  } catch (error) {
    console.error(error);
    callback({
      status: "error",
      message: "Error getting transactionHistoryPoint by ID",
    });
  }
};

TransactionHistoryPoint.createTransactionHistoryPoint = function (
  newTransactionHistoryPoint,
  callback
) {
  console.log(newTransactionHistoryPoint);
  try {
    db.query(
      "INSERT INTO TransactionHistoryPoint SET ?",
      newTransactionHistoryPoint,
      function (err, result) {
        if (err) {
          callback({
            status: "error",
            message: "Error creating transactionHistoryPoint",
          });
        } else {
          callback({
            status: "success",
            message: "Created transactionHistoryPoint successfully",
          });
        }
      }
    );
  } catch (error) {
    callback({
      status: "error",
      message: "Error creating transactionHistoryPoint",
    });
  }
};

TransactionHistoryPoint.createTransactionHistoryPointWhenJoinSlot = function (
  inforWallet,
  tranPoint,
  clubMemSlotId,
  callback
) {
  try {
    const data = {
      walletID: inforWallet.id,
      clubMemSlotId: clubMemSlotId,
      initialPoint: inforWallet.point,
      transactionPointId: tranPoint.id,
      transactionPoint: parseInt(-tranPoint.point),
    };
    db.query(
      "INSERT INTO TransactionHistoryPoint SET ?",
      data,
      function (err, result) {
        if (err) {
          callback({
            status: "error",
            message: "Error creating transactionHistoryPoint",
          });
        } else {
          callback({
            status: "success",
            message: "Created transactionHistoryPoint successfully",
          });
        }
      }
    );
  } catch (error) {
    callback({
      status: "error",
      message: "Error creating transactionHistoryPoint",
    });
  }
};

TransactionHistoryPoint.createTransactionHistoryPointWhenConfirmJoinSlot =
  function (inforWallet, tranPoint, clubMemSlotId, callback) {
    try {
      const data = {
        walletID: inforWallet.id,
        clubMemSlotId: clubMemSlotId,
        initialPoint: inforWallet.point,
        transactionPointId: tranPoint.id,
        transactionPoint: parseInt(+tranPoint.point),
        desciption: "confirm_joined",
      };
      db.query(
        "INSERT INTO TransactionHistoryPoint SET ?",
        data,
        function (err, result) {
          if (err) {
            callback({
              status: "error",
              message: "Error creating transactionHistoryPoint",
            });
          } else {
            callback({
              status: "success",
              message: "Created transactionHistoryPoint successfully",
            });
          }
        }
      );
    } catch (error) {
      callback({
        status: "error",
        message: "Error creating transactionHistoryPoint",
      });
    }
  };

TransactionHistoryPoint.updateTransactionHistoryPoint = function (
  transactionHistoryPointId,
  updatedTransactionHistoryPoint,
  callback
) {
  try {
    db.query(
      "UPDATE TransactionHistoryPoint SET ? WHERE id = ?",
      [updatedTransactionHistoryPoint, transactionHistoryPointId],
      function (err, result) {
        if (err) {
          callback({
            status: "error",
            message: "Error updating transactionHistoryPoint",
          });
        } else {
          if (result.affectedRows > 0) {
            callback({
              status: "success",
              message: "TransactionHistoryPoint updated successfully",
            });
          } else {
            callback({
              status: "error",
              message: "TransactionHistoryPoint not found",
            });
          }
        }
      }
    );
  } catch (error) {
    callback({ status: "error", message: "An error occurred" });
  }
};

TransactionHistoryPoint.deleteTransactionHistoryPoint = function (
  transactionHistoryPointId,
  callback
) {
  try {
    db.query(
      "UPDATE TransactionHistoryPoint SET status = 0 WHERE id = ? and status = 1",
      [transactionHistoryPointId],
      function (err, result) {
        if (result.affectedRows > 0) {
          callback({
            status: "success",
            message: "TransactionHistoryPoint deleted successfully",
          });
        } else {
          callback({
            status: "error",
            message: "TransactionHistoryPoint deleted fail",
          });
        }
      }
    );
  } catch (error) {
    callback({
      status: "error",
      message: "Failed to delete transactionHistoryPoint",
    });
  }
};

module.exports = TransactionHistoryPoint;
