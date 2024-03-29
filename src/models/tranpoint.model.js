const db = require("../common/connect");

const Tranpoint = function (tranpoint) {
  this.id = tranpoint.id;
  this.point = tranpoint.point;
  this.dateTime = tranpoint.dateTime;
  this.status = tranpoint.status;
};

Tranpoint.getAllTranpoints = function (callback) {
  try {
    db.query("SELECT * FROM TranPoint", function (err, result) {
      if (err) {
        console.error(err);
        callback({ status: "error", message: "Tranpoint get all fail" });
      } else {
        callback({
          status: "success",
          result: result,
        });
      }
    });
  } catch (error) {
    callback({ status: "error", message: "Tranpoint get all fail" });
  }
};

Tranpoint.getTranpointById = function (tranpointId, callback) {
  try {
    db.query(
      "SELECT * FROM TranPoint WHERE id = ? and status = 1",
      tranpointId,
      function (err, result) {
        if (err) {
          console.error(err);
          callback({
            status: "error",
            message: "Error getting tranpoint by ID",
          });
        } else {
          if (result.length > 0) {
            // Nếu có dữ liệu trả về
            callback({ status: "success", result: result[0] });
          } else {
            // Nếu không có dữ liệu
            callback({ status: "error", message: "Tranpoint not found" });
          }
        }
      }
    );
  } catch (error) {
    console.error(error);
    callback({ status: "error", message: "Error getting tranpoint by ID" });
  }
};

Tranpoint.get_tranpoint_new = function (callback) {
  try {
    db.query(
      "SELECT * FROM TranPoint WHERE status = 1 ORDER BY dateTime DESC LIMIT 1",
      function (err, result) {
        if (err) {
          console.error(err);
          callback({
            status: "error",
            message: "Error getting latest tranpoint with status 1",
          });
        } else {
          if (result.length > 0) {
            // Nếu có dữ liệu trả về
            callback({ status: "success", result: result[0] });
          } else {
            // Nếu không có dữ liệu
            callback({
              status: "error",
              message: "No tranpoint found with status 1",
            });
          }
        }
      }
    );
  } catch (error) {
    console.error(error);
    callback({
      status: "error",
      message: "Error getting latest tranpoint with status 1",
    });
  }
};

Tranpoint.createTranpoint = function (newTranpoint, callback) {
    // Cập nhật các bản ghi có status = 0 thành status = 1
    try {
      db.query(
        "UPDATE TranPoint SET status = 0 WHERE status = 1",
        function (err, result) {
          if (err) {
            console.log(err);
            callback({ status: "error", message: "Error updating tranpoints" });
          } else {
            // Sau khi cập nhật thành công, thêm bản ghi mới với status = 1
            newTranpoint.status = 1;
            db.query(
              "INSERT INTO TranPoint SET ?",
              newTranpoint,
              function (err, result) {
                if (err) {
                  console.log(err);
                  callback({ status: "error", message: "Error creating tranpoint" });
                } else {
                  callback({
                    status: "success",
                    message: "Created tranpoint successfully",
                  });
                }
              }
            );
          }
        }
      );
    } catch (error) {
      callback({ status: "error", message: "Error creating tranpoint" });
    }
  };
  

Tranpoint.updateTranpoint = function (tranpointId, updatedTranpoint, callback) {
  try {
    db.query(
      "UPDATE TranPoint SET ? WHERE id = ?",
      [updatedTranpoint, tranpointId],
      function (err, result) {
        if (err) {
          callback({ status: "error", message: "Error updating tranpoint" });
        } else {
          if (result.affectedRows > 0) {
            callback({
              status: "success",
              message: "Tranpoint updated successfully",
            });
          } else {
            callback({ status: "error", message: "Tranpoint not found" });
          }
        }
      }
    );
  } catch (error) {
    callback({ status: "error", message: "An error occurred" });
  }
};

Tranpoint.deleteTranpoint = function (tranpointId, callback) {
  try {
    db.query(
      "UPDATE TranPoint SET status = 0 WHERE id = ?",
      [tranpointId],
      function (err, result) {
        if (result.affectedRows > 0) {
          callback({
            status: "success",
            message: "Tranpoint deleted successfully",
          });
        } else {
          callback({ status: "error", message: "Tranpoint deleted fail" });
        }
      }
    );
  } catch (error) {
    callback({ status: "error", message: "Failed to delete tranpoint" });
  }
};

module.exports = Tranpoint;
