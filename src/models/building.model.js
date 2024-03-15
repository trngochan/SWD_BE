const { query } = require("express");
const db = require("../common/connect");

const Building = function (building) {
  this.id = building.id;
  this.areaId = building.areaId;
  this.name = building.name;
  this.status = building.status;
  this.dateTIme = building.dateTIme;
};

Building.createBuilding = function (newBuilding, callback) {
  newBuilding.status = 1;
  newBuilding.dateTime = new Date();
  try {
    db.query("INSERT INTO Building SET ?", newBuilding, function (err, result) {
      if (err) {
        console.error(err);
        callback({ status: "error", message: "Error creating building" });
      } else {
        callback({
          status: "success",
          message: "Created building successfully",
        });
      }
    });
  } catch (error) {
    console.error(error);
    callback({ status: "error", message: "Error creating building" });
  }
};

Building.getBuildingById = function (buildingId, callback) {
  try {
    db.query(
      "SELECT * FROM Building WHERE id = ?",
      buildingId,
      function (err, result) {
        if (err) {
          console.error(err);
          callback({
            status: "error",
            message: "Error getting building by ID",
          });
        } else {
          if (result.length > 0) {
            callback({ status: "success", result: result[0] });
          } else {
            callback({ status: "error", message: "Building not found" });
          }
        }
      }
    );
  } catch (error) {
    console.error(error);
    callback({ status: "error", message: "Error getting building by ID" });
  }
};

Building.getAllBuildings = function (filters, callback) {
  try {
    var query = "SELECT * FROM Building where status = 1";
    // Kiểm tra xem có filters nào được truyền vào không
    if (filters && Object.keys(filters).length > 0) {
      query += " AND ";

      // Xây dựng điều kiện WHERE từ các filters
      const conditions = [];
      Object.keys(filters).forEach((key) => {
        conditions.push(`${key} = ?`);
      });
      query += conditions.join(" AND ");
    }

    // Lấy giá trị của filters để truyền vào db.query
    const filterValues = Object.values(filters || []);

    db.query(query, filterValues, function (err, result) {
      if (err) {
        console.error(err);
        callback({ status: "error", message: "Building get all fail" });
      } else {
        callback({ status: "success", result: result });
      }
    });
  } catch (error) {
    console.error(error);
    callback({ status: "error", message: "Building get all fail" });
  }
};

Building.updateBuilding = function (buildingId, updatedBuilding, callback) {
  try {
    db.query(
      "UPDATE Building SET ? WHERE id = ?",
      [updatedBuilding, buildingId],
      function (err, result) {
        if (err) {
          console.error(err);
          callback({ status: "error", message: "Error updating building" });
        } else {
          if (result.affectedRows > 0) {
            callback({
              status: "success",
              message: "Building updated successfully",
            });
          } else {
            callback({ status: "error", message: "Building not found" });
          }
        }
      }
    );
  } catch (error) {
    console.error(error);
    callback({ status: "error", message: "An error occurred" });
  }
};

Building.deleteBuilding = function (buildingId, callback) {
  try {
    db.query(
      "UPDATE Building SET status = 0 WHERE id = ?",
      [buildingId],
      function (err, result) {
        if (result.affectedRows > 0) {
          callback({
            status: "success",
            message: "Building deleted successfully",
          });
        } else {
          callback({ status: "error", message: "Building deleted fail" });
        }
      }
    );
  } catch (error) {
    console.error(error);
    callback({ status: "error", message: "Failed to delete building" });
  }
};

module.exports = Building;
