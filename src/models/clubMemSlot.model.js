const db = require("../common/connect");

const ClubMemSlot = function (clubMemSlot) {
  this.id = clubMemSlot.id;
  this.clubMemberId = clubMemSlot.clubMemberId;
  this.slotId = clubMemSlot.slotId;
  this.transactionPoint = clubMemSlot.transactionPoint;
  this.status = clubMemSlot.status;
  this.dateTime = clubMemSlot.dateTime;
};

ClubMemSlot.getAllClubMemSlots = function (callback) {
  try {
    db.query(
      "SELECT * FROM ClubMemSlot and status = 1",
      function (err, result) {
        if (err) {
          console.error(err);
          callback({ status: "error", message: "ClubMemSlot get all fail" });
        } else {
          callback({
            status: "success",
            result: result,
          });
        }
      }
    );
  } catch (error) {
    callback({ status: "error", message: "ClubMemSlot get all fail" });
  }
};

ClubMemSlot.getClubMemSlotById = function (clubMemSlotId, callback) {
  try {
    db.query(
      "SELECT * FROM ClubMemSlot WHERE id = ? and status = 1",
      clubMemSlotId,
      function (err, result) {
        if (err) {
          console.error(err);
          callback({
            status: "error",
            message: "Error getting clubMemSlot by ID",
          });
        } else {
          if (result.length > 0) {
            // Nếu có dữ liệu trả về
            callback({ status: "success", result: result[0] });
          } else {
            // Nếu không có dữ liệu
            callback({ status: "error", message: "ClubMemSlot not found" });
          }
        }
      }
    );
  } catch (error) {
    console.error(error);
    callback({ status: "error", message: "Error getting clubMemSlot by ID" });
  }
};

ClubMemSlot.createClubMemSlot = function (newClubMemSlot, callback) {
  newClubMemSlot.status = 1;
  newClubMemSlot.dateTime = new Date();
  try {
    db.query(
      "INSERT INTO ClubMemSlot SET ?",
      newClubMemSlot,
      function (err, result) {
        if (err) {
          callback({ status: "error", message: "Error creating clubMemSlot" });
        } else {
          callback({
            status: "success",
            message: "Created clubMemSlot successfully",
          });
        }
      }
    );
  } catch (error) {
    callback({ status: "error", message: "Error creating clubMemSlot" });
  }
};

ClubMemSlot.updateClubMemSlot = function (
  clubMemSlotId,
  updatedClubMemSlot,
  callback
) {
  try {
    db.query(
      "UPDATE ClubMemSlot SET ? WHERE id = ? and status = 1",
      [updatedClubMemSlot, clubMemSlotId],
      function (err, result) {
        if (err) {
          callback({ status: "error", message: "Error updating clubMemSlot" });
        } else {
          if (result.affectedRows > 0) {
            callback({
              status: "success",
              message: "ClubMemSlot updated successfully",
            });
          } else {
            callback({ status: "error", message: "ClubMemSlot not found" });
          }
        }
      }
    );
  } catch (error) {
    callback({ status: "error", message: "An error occurred" });
  }
};

ClubMemSlot.deleteClubMemSlot = function (clubMemSlotId, callback) {
  try {
    db.query(
      "UPDATE ClubMemSlot SET status = 0 WHERE id = ? and status = 1",
      [clubMemSlotId],
      function (err, result) {
        if (result.affectedRows > 0) {
          callback({
            status: "success",
            message: "ClubMemSlot deleted successfully",
          });
        } else {
          callback({ status: "error", message: "ClubMemSlot deleted fail" });
        }
      }
    );
  } catch (error) {
    callback({ status: "error", message: "Failed to delete clubMemSlot" });
  }
};

ClubMemSlot.getClubMemSlotByEmail = function (email, callback) {
  try {
    db.query(
      "SELECT * FROM ClubMemSlot WHERE email = ? and status = 1",
      email,
      function (err, result) {
        if (err) {
          console.error(err);
          callback({
            status: "error",
            message: "Error getting clubMemSlot by email",
          });
        } else {
          if (result.length > 0) {
            // Nếu có dữ liệu trả về
            callback({ status: "success", result: result[0] });
          } else {
            // Nếu không có dữ liệu
            callback({ status: "error", message: "ClubMemSlot not found" });
          }
        }
      }
    );
  } catch (error) {
    console.error(error);
    callback({
      status: "error",
      message: "Error getting clubMemSlot by email",
    });
  }
};

module.exports = ClubMemSlot;
