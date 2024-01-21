const db = require("../common/connect");

const Yard = function (yard) {
  this.id = yard.id;
  this.name = yard.name;
  this.sportId = yard.sportId;
  this.sportName = yard.sportName;

  this.areaId = yard.areaId;
  this.areaName = yard.areaName;
  this.status = yard.status;
  this.dateTime = yard.dateTime;
};

Yard.getAllYards = function (callback) {
  try {
    db.query("SELECT * FROM Yard", function (err, result) {
      if (err) {
        console.error(err);
        callback({ status: "error", message: "Yard get all fail" });
      } else {
        callback({
          status: "success",
          result: result,
        });
      }
    });
  } catch (error) {
    callback({ status: "error", message: "Yard get all fail" });
  }
};

Yard.getYardById = function (yardId, callback) {
  try {
    db.query("SELECT * FROM Yard WHERE id = ?", yardId, function (err, result) {
      if (err) {
        console.error(err);
        callback({
          status: "error",
          message: "Error getting yard by ID",
        });
      } else {
        if (result.length > 0) {
          callback({ status: "success", result: result[0] });
        } else {
          callback({ status: "error", message: "Yard not found" });
        }
      }
    });
  } catch (error) {
    callback({ status: "error", message: "Error getting yard by ID" });
  }
};

Yard.createYard = function (newYard, callback) {
  try {
    db.query("INSERT INTO Yard SET ?", newYard, function (err, result) {
      if (err) {
        callback({ status: "error", message: "Error creating yard" });
      } else {
        callback({
          status: "success",
          message: "Created yard successfully",
        });
      }
    });
  } catch (error) {
    callback({ status: "error", message: "Error creating yard" });
  }
};

Yard.updateYard = function (yardId, updatedYard, callback) {
  try {
    db.query(
      "UPDATE Yard SET ? WHERE id = ?",
      [updatedYard, yardId],
      function (err, result) {
        if (err) {
          callback({ status: "error", message: "Error updating yard" });
        } else {
          if (result.affectedRows > 0) {
            callback({
              status: "success",
              message: "Yard updated successfully",
            });
          } else {
            callback({ status: "error", message: "Yard not found" });
          }
        }
      }
    );
  } catch (error) {
    callback({ status: "error", message: "An error occurred" });
  }
};

Yard.deleteYard = function (yardId, callback) {
  try {
    db.query(
      "UPDATE Yard SET status = 0 WHERE id = ?",
      [yardId],
      function (err, result) {
        if (result.affectedRows > 0) {
          callback({
            status: "success",
            message: "Yard deleted successfully",
          });
        } else {
          callback({ status: "error", message: "Yard deleted fail" });
        }
      }
    );
  } catch (error) {
    callback({ status: "error", message: "Failed to delete yard" });
  }
};

module.exports = Yard;
