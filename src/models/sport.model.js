const db = require("../common/connect");

const Sport = function (sport) {
  this.id = sport.id;
  this.name = sport.name;
  this.description = sport.description;
  this.avatar = sport.avatar;
  this.status = sport.status;
  this.dateTime = sport.dateTime;
};

Sport.createSport = function (newSport, callback) {
  newSport.status=1;
  newSport.dateTime= new Date();
  try {
    db.query("INSERT INTO Sport SET ?", newSport, function (err, result) {
      if (err) {
        callback({ status: "error", message: "Error creating sport" });
      } else {
        callback({
          status: "success",
          message: "Created sport successfully",
        });
      }
    });
  } catch (error) {
    callback({ status: "error", message: "Error creating sport" });
  }
};

Sport.getSportById = function (sportId, callback) {
  try {
    db.query(
      "SELECT * FROM Sport WHERE id = ?",
      sportId,
      function (err, result) {
        if (err) {
          callback({ status: "error", message: "Error getting sport by ID" });
        } else {
          if (result.length > 0) {
            // Nếu có dữ liệu trả về
            callback({ status: "success", result: result[0] });
          } else {
            // Nếu không có dữ liệu
            callback({ status: "error", message: "Sport not found" });
          }
        }
      }
    );
  } catch (error) {
    callback({ status: "error", message: "Error getting sport by ID" });
  }
};

Sport.getAllSports = function (callback) {
  try {
    db.query("SELECT * FROM Sport", function (err, result) {
      if (err) {
        callback({ status: "error", message: "Sport get all fail" });
      } else {
        callback({
          status: "success",
          result: result,
        });
      }
    });
  } catch (error) {
    callback({ status: "error", message: "Sport get all fail" });
  }
};

Sport.updateSport = function (sportId, updatedSport, callback) {
  try {
    db.query(
      "UPDATE Sport SET ? WHERE id = ?",
      [updatedSport, sportId],
      function (err, result) {
        if (err) {
          callback({ status: "error", message: "Error updating sport" });
        } else {
          if (result.affectedRows > 0) {
            callback({
              status: "success",
              message: "Sport updated successfully",
            });
          } else {
            callback({ status: "error", message: "Sport not found" });
          }
        }
      }
    );
  } catch (error) {
    callback({ status: "error", message: "An error occurred" });
  }
};

Sport.deleteSport = function (sportId, callback) {
  try {
    db.query("DELETE FROM Sport WHERE id = ?", sportId, function (err, result) {
      if (result.affectedRows > 0) {
        callback({
          status: "success",
          message: "Sport deleted successfully",
        });
      } else {
        callback({ status: "error", message: "Sport deleted fail" });
      }
    });
  } catch (error) {
    callback({ status: "error", message: "Failed to delete sport" });
  }
};

module.exports = Sport;
