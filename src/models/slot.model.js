const db = require("../common/connect");

const Slot = function (slot) {
  this.id = slot.id;
  this.name = slot.name;
  this.startTime = slot.startTime;
  this.endTime = slot.endTime;
  this.memberPostId = slot.memberPostId;
  this.currentMember = slot.currentMember;
  this.requiredMenber = slot.requiredMenber;
  this.yardId = slot.yardId;
  this.yardName = slot.yardName;
  this.status = slot.status;
  this.dateTime = slot.dateTime;
};

Slot.getAllSlots = function (callback) {
  try {
    db.query("SELECT * FROM Slot", function (err, result) {
      if (err) {
        console.error(err);
        callback({ status: "error", message: "Slot get all fail" });
      } else {
        callback({
          status: "success",
          result: result,
        });
      }
    });
  } catch (error) {
    callback({ status: "error", message: "Slot get all fail" });
  }
};

Slot.getSlotById = function (slotId, callback) {
  try {
    db.query(
      "SELECT * FROM Slot WHERE id = ?",
      slotId,
      function (err, result) {
        if (err) {
          console.error(err);
          callback({ status: "error", message: "Error getting slot by ID" });
        } else {
          if (result.length > 0) {
            // Nếu có dữ liệu trả về
            callback({ status: "success", result: result[0] });
          } else {
            // Nếu không có dữ liệu
            callback({ status: "error", message: "Slot not found" });
          }
        }
      }
    );
  } catch (error) {
    console.error(error);
    callback({ status: "error", message: "Error getting slot by ID" });
  }
};

Slot.createSlot = function (newSlot, callback) {
  console.log(newSlot);
  try {
    db.query("INSERT INTO Slot SET ?", newSlot, function (err, result) {
      if (err) {
        callback({ status: "error", message: "Error creating slot" });
      } else {
        callback({
          status: "success",
          message: "Created slot successfully",
        });
      }
    });
  } catch (error) {
    callback({ status: "error", message: "Error creating slot" });
  }
};

Slot.updateSlot = function (slotId, updatedSlot, callback) {
  try {
    db.query(
      "UPDATE Slot SET ? WHERE id = ?",
      [updatedSlot, slotId],
      function (err, result) {
        if (err) {
          callback({ status: "error", message: "Error updating slot" });
        } else {
          if (result.affectedRows > 0) {
            callback({
              status: "success",
              message: "Slot updated successfully",
            });
          } else {
            callback({ status: "error", message: "Slot not found" });
          }
        }
      }
    );
  } catch (error) {
    callback({ status: "error", message: "An error occurred" });
  }
};

Slot.deleteSlot = function (slotId, callback) {
  try {
    db.query(
      "UPDATE Slot SET status = 0 WHERE id = ?",
      [slotId],
      function (err, result) {
        if (result.affectedRows > 0) {
          callback({
            status: "success",
            message: "Slot deleted successfully",
          });
        } else {
          callback({ status: "error", message: "Slot deleted fail" });
        }
      }
    );
  } catch (error) {
    callback({ status: "error", message: "Failed to delete slot" });
  }
};

Slot.getSlotByEmail = function (email, callback) {
  try {
    db.query(
      "SELECT * FROM Slot WHERE email = ?",
      email,
      function (err, result) {
        if (err) {
          console.error(err);
          callback({
            status: "error",
            message: "Error getting slot by email",
          });
        } else {
          if (result.length > 0) {
            // Nếu có dữ liệu trả về
            callback({ status: "success", result: result[0] });
          } else {
            // Nếu không có dữ liệu
            callback({ status: "error", message: "Slot not found" });
          }
        }
      }
    );
  } catch (error) {
    console.error(error);
    callback({ status: "error", message: "Error getting slot by email" });
  }
};

module.exports = Slot;
