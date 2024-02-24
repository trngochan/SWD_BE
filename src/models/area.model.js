const db = require("../common/connect");

const Area = function (area) {
  this.id = area.id;
  this.name = area.name;
  this.address = area.address;
  this.status = area.status;
  this.dateTime = area.dateTime;
};

Area.createArea = function (newArea, callback) {
  newArea.status = 1;
  newArea.dateTime = new Date();
  try {
    db.query("INSERT INTO Area SET ?", newArea, function (err, result) {
      if (err) {
        callback({ status: "error", message: "Error creating area" });
      } else {
        callback({
          status: "success",
          message: "Created area successfully",
        });
      }
    });
  } catch (error) {
    callback({ status: "error", message: "Error creating area" });
  }
};

Area.getAreaById = function (areaId, callback) {
  try {
    db.query("SELECT * FROM Area WHERE id = ?", areaId, function (err, result) {
      if (err) {
        console.error(err);
        callback({ status: "error", message: "Error getting area by ID" });
      } else {
        if (result.length > 0) {
          callback({ status: "success", result: result[0] });
        } else {
          callback({ status: "error", message: "Area not found" });
        }
      }
    });
  } catch (error) {
    console.error(error);
    callback({ status: "error", message: "Error getting area by ID" });
  }
};

Area.getByYardId = function (yardId, callback) {
  console.log(yardId);
  try {
    db.query(
      "SELECT * FROM Area WHERE yardId = ? and status = 1",
      yardId,
      function (err, result) {
        if (err) {
          console.error(err);
          callback({ status: "error", message: "Error getting area by ID" });
        } else {
          callback({ status: "success", result: result[0] });
        }
      }
    );
  } catch (error) {
    console.error(error);
    callback({ status: "error", message: "Error getting area by ID" });
  }
};

Area.getAllAreas = function (callback) {
  try {
    db.query("SELECT * FROM Area", function (err, result) {
      if (err) {
        console.error(err);
        callback({ status: "error", message: "Area get all fail" });
      } else {
        callback({ status: "success", result: result });
      }
    });
  } catch (error) {
    console.error(error);
    callback({ status: "error", message: "Area get all fail" });
  }
};

Area.updateArea = function (areaId, updatedArea, callback) {
  try {
    db.query(
      "UPDATE Area SET ? WHERE id = ?",
      [updatedArea, areaId],
      function (err, result) {
        if (err) {
          callback({ status: "error", message: "Error updating area" });
        } else {
          if (result.affectedRows > 0) {
            callback({
              status: "success",
              message: "Area updated successfully",
            });
          } else {
            callback({ status: "error", message: "Area not found" });
          }
        }
      }
    );
  } catch (error) {
    callback({ status: "error", message: "An error occurred" });
  }
};

Area.deleteArea = function (areaId, callback) {
  try {
    db.query(
      "UPDATE Area SET status = 0 WHERE id = ?",
      [areaId],
      function (err, result) {
        if (result.affectedRows > 0) {
          callback({
            status: "success",
            message: "Area deleted successfully",
          });
        } else {
          callback({ status: "error", message: "Area deleted fail" });
        }
      }
    );
  } catch (error) {
    callback({ status: "error", message: "Failed to delete area" });
  }
};

module.exports = Area;
