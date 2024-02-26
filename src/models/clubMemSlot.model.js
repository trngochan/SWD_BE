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
      "SELECT * FROM ClubMemSlot where status = 1",
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

ClubMemSlot.geSlotJoinedByClubMember = function (clubMem, callback) {
  try {
    db.query(
      "SELECT * FROM ClubMemSlot WHERE clubMemberId = ? AND status = 1 ORDER BY id DESC;",
      clubMem,
      function (err, result) {
        if (err) {
          console.error(err);
          callback({
            status: "error",
            message: "Error getting clubMemSlot by ID",
          });
        } else {
          // Nếu có dữ liệu trả về
          callback({ status: "success", result: result });
        }
      }
    );
  } catch (error) {
    console.error(error);
    callback({ status: "error", message: "Error getting clubMemSlot by ID" });
  }
};

ClubMemSlot.getClubMemsBySlotId = function (slotId, callback) {
  try {
    db.query(
      "SELECT clubMemberId, id as clubMemberSlotId, joinStatus  FROM ClubMemSlot WHERE slotId = ? AND status = 1 ORDER BY id DESC;",
      slotId,
      function (err, result) {
        if (err) {
          console.error(err);
          callback({
            status: "error",
            message: "Error getting clubMemSlot by ID",
          });
        } else {
          // Nếu có dữ liệu trả về
          callback({ status: "success", result: result });
        }
      }
    );
  } catch (error) {
    console.error(error);
    callback({ status: "error", message: "Error getting clubMemSlot by ID" });
  }
};

ClubMemSlot.getSlotJoinedIDByClubMember = function (clubMem, callback) {
  try {
    db.query(
      "SELECT slotId FROM ClubMemSlot WHERE clubMemberId = ? AND status = 1 ORDER BY id DESC;",
      clubMem,
      function (err, result) {
        if (err) {
          console.error(err);
          callback({
            status: "error",
            message: "Error getting clubMemSlot by ID",
          });
        } else {
          // Nếu có dữ liệu trả về
          callback({ status: "success", result: result });
        }
      }
    );
  } catch (error) {
    console.error(error);
    callback({ status: "error", message: "Error getting clubMemSlot by ID" });
  }
};

ClubMemSlot.getNumberOfSlot = function (slotId, callback) {
  try {
    db.query(
      "SELECT COUNT(*) AS numberOfSlots FROM ClubMemSlot WHERE slotId = ? and status = 1",
      slotId,
      function (err, result) {
        if (err) {
          console.error(err);
          callback({
            status: "error",
            message: "Error counting clubMemSlots by slotId",
          });
        } else {
          if (result.length > 0) {
            // Nếu có dữ liệu trả về
            callback({ status: "success", result: result[0].numberOfSlots });
          } else {
            // Nếu không có dữ liệu
            callback({
              status: "error",
              message: "No clubMemSlots found for the given slotId",
            });
          }
        }
      }
    );
  } catch (error) {
    console.error(error);
    callback({
      status: "error",
      message: "Error counting clubMemSlots by slotId",
    });
  }
};

ClubMemSlot.createClubMemSlot = function (newClubMemSlot, callback) {
  try {
    db.query(
      "INSERT INTO ClubMemSlot SET ?",
      newClubMemSlot,
      function (err, result) {
        if (err) {
          callback({ status: "error", message: "Error creating clubMemSlot" });
        } else {
          const insertedId = result.insertId;
          callback({
            status: "success",
            message: "Created clubMemSlot successfully",
            result: insertedId,
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

ClubMemSlot.comfirm_no_joining = function (clubMemSlotId, callback) {
  try {
    db.query(
      "UPDATE ClubMemSlot SET joinStatus = 'confirm_no_joined' WHERE id = ? and status = 1",
      [clubMemSlotId],
      function (err, result) {
        if (err) {
          callback({ status: "error", message: "Error updating clubMemSlot" });
        } else {
          if (result.affectedRows > 0) {
            const insertedId = result.insertId;

            callback({
              status: "success",
              message: "ClubMemSlot updated successfully",
              result: insertedId,
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

ClubMemSlot.comfirm_joining = function (clubMemId, SlotId, callback) {
  try {
    db.query(
      "UPDATE ClubMemSlot SET joinStatus = 'confirm_joined' WHERE clubMemberId = ? and slotId = ? and status = 1",
      [clubMemId, SlotId],
      function (err, result) {
        if (err) {
          callback({ status: "error", message: "Error updating clubMemSlot" });
        } else {
          if (result.affectedRows > 0) {
            const insertedId = result.insertId;

            callback({
              status: "success",
              message: "ClubMemSlot updated successfully",
              result: insertedId,
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

ClubMemSlot.comfirm_no_joining = function (clubMemId, SlotId, callback) {
  try {
    db.query(
      "UPDATE ClubMemSlot SET joinStatus = 'confirm_no_joined' WHERE clubMemberId = ? and slotId = ? and status = 1",
      [clubMemId, SlotId],
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
