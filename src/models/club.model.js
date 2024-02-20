const db = require("../common/connect");

const Club = function (club) {
  this.id = club.id;
  this.name = club.name;
  this.decription = club.decription;
  this.countMember = club.countMember;
  this.sportName = club.sportName;
  this.sportId = club.sportId;
  this.status = club.status;
  this.dateTime = club.dateTime;
};

Club.getAllClubs = function (callback) {
  try {
    db.query("SELECT * FROM Club", function (err, result) {
      if (err) {
        console.error(err);
        callback({ status: "error", message: "Club get all fail" });
      } else {
        callback({
          status: "success",
          result: result,
        });
      }
    });
  } catch (error) {
    callback({ status: "error", message: "Club get all fail" });
  }
};

Club.getClubById = function (clubId, callback) {
  try {
    db.query("SELECT * FROM Club WHERE id = ?", clubId, function (err, result) {
      if (err) {
        console.error(err);
        callback({ status: "error", message: "Error getting club by ID" });
      } else {
        if (result.length > 0) {
          // Nếu có dữ liệu trả về
          callback({ status: "success", result: result[0] });
        } else {
          // Nếu không có dữ liệu
          callback({ status: "error", message: "Club not found" });
        }
      }
    });
  } catch (error) {
    console.error(error);
    callback({ status: "error", message: "Error getting club by ID" });
  }
};

Club.createClub = function (newClub, callback) {
  newClub.status = 1;
  newClub.dateTime = new Date();
  console.log(newClub);
  try {
    db.query("INSERT INTO Club SET ?", newClub, function (err, result) {
      if (err) {
        callback({ status: "error", message: "Error creating club" });
      } else {
        callback({
          status: "success",
          message: "Created club successfully",
        });
      }
    });
  } catch (error) {
    callback({ status: "error", message: "Error creating club" });
  }
};

Club.updateClub = function (clubId, updatedClub, callback) {
  try {
    db.query(
      "UPDATE Club SET ? WHERE id = ?",
      [updatedClub, clubId],
      function (err, result) {
        if (err) {
          callback({ status: "error", message: "Error updating club" });
        } else {
          if (result.affectedRows > 0) {
            callback({
              status: "success",
              message: "Club updated successfully",
            });
          } else {
            callback({ status: "error", message: "Club not found" });
          }
        }
      }
    );
  } catch (error) {
    callback({ status: "error", message: "An error occurred" });
  }
};

Club.deleteClub = function (clubId, callback) {
  try {
    db.query(
      "UPDATE Club SET status = 0 WHERE id = ?",
      [clubId],
      function (err, result) {
        if (result.affectedRows > 0) {
          callback({
            status: "success",
            message: "Club deleted successfully",
          });
        } else {
          callback({ status: "error", message: "Club deleted fail" });
        }
      }
    );
  } catch (error) {
    callback({ status: "error", message: "Failed to delete club" });
  }
};

Club.getClubByEmail = function (email, callback) {
  try {
    db.query(
      "SELECT * FROM Club WHERE email = ?",
      email,
      function (err, result) {
        if (err) {
          console.error(err);
          callback({
            status: "error",
            message: "Error getting club by email",
          });
        } else {
          if (result.length > 0) {
            // Nếu có dữ liệu trả về
            callback({ status: "success", result: result[0] });
          } else {
            // Nếu không có dữ liệu
            callback({ status: "error", message: "Club not found" });
          }
        }
      }
    );
  } catch (error) {
    console.error(error);
    callback({ status: "error", message: "Error getting club by email" });
  }
};

Club.addMember = function (idClub, callback) {
  try {
    db.query(
      "UPDATE Club SET countMember = countMember + 1 WHERE id = ?",
      idClub,
      function (err, result) {
        if (err) {
          console.error(err);
          callback({
            status: "error",
            message: "Error updating countMember",
          });
        } else {
          // Kiểm tra xem có dòng nào bị ảnh hưởng bởi truy vấn UPDATE hay không
          if (result.affectedRows > 0) {
            callback({ status: "success" });
          } else {
            callback({ status: "error", message: "Club not found" });
          }
        }
      }
    );
  } catch (error) {
    console.error(error);
    callback({ status: "error", message: "Error updating countMember" });
  }
};

Club.removeMember = function (idClub, callback) {
  try {
    db.query(
      "UPDATE Club SET countMember = countMember - 1 WHERE id = ? AND countMember > 0",
      idClub,
      function (err, result) {
        if (err) {
          console.error(err);
          callback({
            status: "error",
            message: "Error updating countMember",
          });
        } else {
          // Kiểm tra xem có dòng nào bị ảnh hưởng bởi truy vấn UPDATE hay không
          if (result.affectedRows > 0) {
            callback({ status: "success" });
          } else {
            callback({
              status: "error",
              message: "Club not found or countMember already at 0",
            });
          }
        }
      }
    );
  } catch (error) {
    console.error(error);
    callback({ status: "error", message: "Error updating countMember" });
  }
};

module.exports = Club;
