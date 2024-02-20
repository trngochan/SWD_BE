const db = require("../common/connect");

const ClubMember = function (clubMember) {
  this.id = clubMember.id;
  this.memberID = clubMember.memberID;
  this.memberName = clubMember.memberName;
  this.clubID = clubMember.clubID;
  this.clubName = clubMember.clubName;
  this.status = clubMember.status;
  this.dateTime = clubMember.dateTime;
};

ClubMember.getAllClubMembers = function (callback) {
  try {
    db.query("SELECT * FROM ClubMember", function (err, result) {
      if (err) {
        console.error(err);
        callback({ status: "error", message: "ClubMember get all fail" });
      } else {
        callback({
          status: "success",
          result: result,
        });
      }
    });
  } catch (error) {
    callback({ status: "error", message: "ClubMember get all fail" });
  }
};

ClubMember.getClubMemberById = function (clubMemberId, callback) {
  try {
    db.query(
      "SELECT * FROM ClubMember WHERE id = ? and status = 1",
      clubMemberId,
      function (err, result) {
        if (err) {
          console.error(err);
          callback({
            status: "error",
            message: "Error getting clubMember by ID",
          });
        } else {
          if (result.length > 0) {
            // Nếu có dữ liệu trả về
            callback({ status: "success", result: result[0] });
          } else {
            // Nếu không có dữ liệu
            callback({ status: "error", message: "ClubMember not found" });
          }
        }
      }
    );
  } catch (error) {
    console.error(error);
    callback({ status: "error", message: "Error getting clubMember by ID" });
  }
};

ClubMember.getByIdMemberClub = function (clubId, MemberId, callback) {
  try {
    db.query(
      "SELECT * FROM ClubMember WHERE clubId = ? and memberId = ? and status = 1 ORDER BY dateTime DESC  limit 1",
      [clubId, MemberId],
      function (err, result) {
        if (err) {
          console.error(err);
          callback({
            status: "error",
            message: "Error getting clubMember by ID",
          });
        } else {
          if (result.length > 0) {
            // Nếu có dữ liệu trả về
            callback({ status: "success", result: result[0] });
          } else {
            // Nếu không có dữ liệu
            callback({ status: "error", message: "ClubMember not found" });
          }
        }
      }
    );
  } catch (error) {
    console.error(error);
    callback({ status: "error", message: "Error getting clubMember by ID" });
  }
};

ClubMember.createClubMember = function (newClubMember, callback) {
  try {
    db.query(
      "INSERT INTO ClubMember SET ?",
      newClubMember,
      function (err, result) {
        if (err) {
          callback({ status: "error", message: "Error creating clubMember" });
        } else {
          callback({
            status: "success",
            message: "Created clubMember successfully",
          });
        }
      }
    );
  } catch (error) {
    callback({ status: "error", message: "Error creating clubMember" });
  }
};

ClubMember.updateClubMember = function (
  clubMemberId,
  updatedClubMember,
  callback
) {
  try {
    db.query(
      "UPDATE ClubMember SET ? WHERE id = ?",
      [updatedClubMember, clubMemberId],
      function (err, result) {
        if (err) {
          callback({ status: "error", message: "Error updating clubMember" });
        } else {
          if (result.affectedRows > 0) {
            callback({
              status: "success",
              message: "ClubMember updated successfully",
            });
          } else {
            callback({ status: "error", message: "ClubMember not found" });
          }
        }
      }
    );
  } catch (error) {
    callback({ status: "error", message: "An error occurred" });
  }
};

ClubMember.deleteClubMember = function (clubMemberId, callback) {
  try {
    db.query(
      "UPDATE ClubMember SET status = 0 WHERE id = ?",
      [clubMemberId],
      function (err, result) {
        if (result.affectedRows > 0) {
          callback({
            status: "success",
            message: "ClubMember deleted successfully",
          });
        } else {
          callback({ status: "error", message: "ClubMember deleted fail" });
        }
      }
    );
  } catch (error) {
    callback({ status: "error", message: "Failed to delete clubMember" });
  }
};

ClubMember.getClubMemberByEmail = function (email, callback) {
  try {
    db.query(
      "SELECT * FROM ClubMember WHERE email = ?",
      email,
      function (err, result) {
        if (err) {
          console.error(err);
          callback({
            status: "error",
            message: "Error getting clubMember by email",
          });
        } else {
          if (result.length > 0) {
            // Nếu có dữ liệu trả về
            callback({ status: "success", result: result[0] });
          } else {
            // Nếu không có dữ liệu
            callback({ status: "error", message: "ClubMember not found" });
          }
        }
      }
    );
  } catch (error) {
    console.error(error);
    callback({ status: "error", message: "Error getting clubMember by email" });
  }
};

ClubMember.check_join = function (idMember, idClub, callback) {
  try {
    db.query(
      "SELECT * FROM ClubMember WHERE memberId = ? and clubId = ? and status = 1",
      [idMember, idClub], // Truyền mảng chứa cả hai giá trị vào đây
      function (err, result) {
        if (err) {
          console.error(err);
          callback({
            status: "error",
            message: "Error getting clubMember by email",
          });
        } else {
          if (result.length > 0) {
            // Nếu có dữ liệu trả về
            callback({ status: "success", result: 1 });
          } else {
            // Nếu không có dữ liệu
            callback({ status: "success", result: 0 });
          }
        }
      }
    );
  } catch (error) {
    console.error(error);
    callback({ status: "error", message: "Error getting clubMember" });
  }
};

ClubMember.leaving_club = function (body, callback) {
  try {
    console.log(body);
    db.query(
      "UPDATE `ClubMember` SET `status` = 0 WHERE `memberId` = ? AND `clubId` = ? and status = 1",
      [body.memberId, body.clubId],
      function (err, result) {
        if (err) {
          console.error(err);
          callback({
            status: "error",
            message: "Error updating clubMember status",
          });
        } else {
          // Kiểm tra số dòng bị ảnh hưởng bởi truy vấn UPDATE
          if (result.affectedRows > 0) {
            // Nếu có dòng bị ảnh hưởng, tức là truy vấn đã thực hiện thành công
            callback({ status: "success", result: 1 });
          } else {
            // Nếu không có dòng nào bị ảnh hưởng, tức là không tìm thấy dữ liệu phù hợp để cập nhật
            callback({ status: "success", result: 0 });
          }
        }
      }
    );
  } catch (error) {
    console.error(error);
    callback({ status: "error", message: "Error updating clubMember status" });
  }
};

module.exports = ClubMember;
