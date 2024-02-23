const db = require("../common/connect");
const jwt = require("jsonwebtoken");

const Member = function (member) {
  this.id = member.id;
  this.name = member.name;
  this.email = member.email;
  this.password = member.password;
  this.image = member.image;
  this.gender = member.gender;
  this.buildingId = member.buildingId;
  this.buildingName = member.buildingName;
  this.phoneNumber = member.phoneNumber;
  this.status = member.status;
  this.dateTime = member.dateTime;
};

Member.getAllMembers = function (callback) {
  try {
    db.query("SELECT * FROM Member", function (err, result) {
      if (err) {
        console.error(err);
        callback({ status: "error", message: "Member get all fail" });
      } else {
        callback({
          status: "success",
          result: result,
        });
      }
    });
  } catch (error) {
    callback({ status: "error", message: "Member get all fail" });
  }
};

Member.getMemberById = function (memberId, callback) {
  try {
    db.query(
      "SELECT * FROM Member WHERE id = ?",
      memberId,
      function (err, result) {
        if (err) {
          console.error(err);
          callback({ status: "error", message: "Error getting member by ID" });
        } else {
          if (result.length > 0) {
            // Nếu có dữ liệu trả về
            callback({ status: "success", result: result[0] });
          } else {
            // Nếu không có dữ liệu
            callback({ status: "error", message: "Member not found" });
          }
        }
      }
    );
  } catch (error) {
    console.error(error);
    callback({ status: "error", message: "Error getting member by ID" });
  }
};

Member.createMember = function (newMember, callback) {
  newMember.status = 1;
  newMember.dateTime = new Date();
  try {
    db.query("INSERT INTO Member SET ?", newMember, function (err, result) {
      if (err) {
        callback({
          status: "error",
          message: "Error creating member",
          err: err,
        });
      } else {
        // Truy vấn thông tin của user vừa được tạo
        db.query(
          "SELECT email, id FROM Member WHERE id = ?",
          [result.insertId],
          function (err, userResult) {
            if (err) {
              callback({
                status: "error",
                message: "Error retrieving created member",
              });
            } else {
              // Trả về thông tin user vừa được tạo
              const createdUser = userResult[0];
              // Tạo token
              const token = jwt.sign(
                { memberId: userResult.id },
                "your-secret-key",
                {
                  expiresIn: "1h", // Thời gian hết hạn của token
                }
              );
              callback({
                status: "success",
                message: "Created member successfully",
                user: createdUser,
                role: "user",
                token: token,
              });
            }
          }
        );
      }
    });
  } catch (error) {
    callback({ status: "error", message: "Error creating member" });
  }
};

Member.updateMember = function (memberId, updatedMember, callback) {
  try {
    db.query(
      "UPDATE Member SET ? WHERE id = ?",
      [updatedMember, memberId],
      function (err, result) {
        if (err) {
          callback({ status: "error", message: "Error updating member" });
        } else {
          if (result.affectedRows > 0) {
            callback({
              status: "success",
              message: "Member updated successfully",
            });
          } else {
            callback({ status: "error", message: "Member not found" });
          }
        }
      }
    );
  } catch (error) {
    callback({ status: "error", message: "An error occurred" });
  }
};

Member.deleteMember = function (memberId, callback) {
  try {
    db.query(
      "UPDATE Member SET status = 0 WHERE id = ?",
      [memberId],
      function (err, result) {
        if (result.affectedRows > 0) {
          callback({
            status: "success",
            message: "Member deleted successfully",
          });
        } else {
          callback({ status: "error", message: "Member deleted fail" });
        }
      }
    );
  } catch (error) {
    callback({ status: "error", message: "Failed to delete member" });
  }
};

Member.getMemberByEmail = function (email, callback) {
  try {
    db.query(
      "SELECT * FROM Member WHERE email = ?",
      email,
      function (err, result) {
        if (err) {
          console.error(err);
          callback({
            status: "error",
            message: "Error getting member by email",
          });
        } else {
          if (result.length > 0) {
            // Nếu có dữ liệu trả về
            callback({ status: "success", result: result[0] });
          } else {
            // Nếu không có dữ liệu
            callback({ status: "error", message: "Member not found" });
          }
        }
      }
    );
  } catch (error) {
    console.error(error);
    callback({ status: "error", message: "Error getting member by email" });
  }
};

Member.emailExists = function (newMember, callback) {
  try {
    db.query(
      "SELECT * FROM Member WHERE email = ?",
      [newMember.email],
      function (err, result) {
        if (err) {
          console.error(err);
          callback({ status: "error", message: "An error occurred" });
        } else {
          if (result.length > 0) {
            // Email đã tồn tại
            callback({ status: "success", exists: true });
          } else {
            // Email chưa tồn tại
            callback({ status: "success", exists: false });
          }
        }
      }
    );
  } catch (error) {
    callback({ status: "error", message: "Error checking email existence" });
  }
};

module.exports = Member;
