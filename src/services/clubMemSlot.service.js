// clubMemSlot.service.js
const ClubMemSlotModel = require("../models/clubMemSlot.model");
const TransactionHistoryPoint = require("../models/transactionHistoryPoint.model");
const Wallet = require("../models/wallet.model");

class ClubMemSlotService {
  static getAllClubMemSlots(callback) {
    ClubMemSlotModel.getAllClubMemSlots(callback);
  }

  static createClubMemSlot(newClubMemSlot, inforWallet, tranPoint, callback) {
    ClubMemSlotModel.createClubMemSlot(newClubMemSlot, function (result) {
      const idWallet = inforWallet.id;
      if (result.status === "success") {
        TransactionHistoryPoint.createTransactionHistoryPointWhenJoinSlot(
          inforWallet,
          tranPoint,
          result.result,
          (response1) => {
            if (response1.status === "success") {
              Wallet.decreaPoint(
                {
                  walletId: idWallet,
                  point: tranPoint.point,
                },
                (response) => {
                  if (response.status == "success") {
                    callback(result);
                  }
                }
              );
            }
          }
        );
      }
      // callback(result);
    });
  }

  static comfirm_joining(clubMemId, SlotId, tranPoint, memberId, callback) {
    ClubMemSlotModel.comfirm_joining(clubMemId, SlotId, function (result) {
      console.log("id", result.result);
      if (result.status === "success") {
        try {
          Wallet.getByMemberid(memberId, function (response) {
            // console.log("result", response.result.id);
            console.log("result", memberId);
            if (response.status === "success") {
              TransactionHistoryPoint.createTransactionHistoryPointWhenConfirmJoinSlot(
                response.result,
                tranPoint,
                result.result,
                (response) => {
                  if (response.status === "success") {
                    Wallet.addPoint(
                      {
                        walletId: memberId,
                        point: tranPoint.point,
                      },
                      (response) => {
                        if (response.status == "success") {
                          callback(result);
                        }
                      }
                    );
                  } else {
                    console.log("erre");
                  }
                }
              );
            } else {
              console.error(
                "Error when getting wallet by ID:",
                response.message
              );
            }
          });
        } catch (error) {
          console.error("Error during execution:", error);
        }
      }
      // callback(result);
    });
  }

  static comfirm_no_joining(clubMemId, SlotId, callback) {
    ClubMemSlotModel.comfirm_no_joining(clubMemId, SlotId, callback);
  }

  static getClubMemSlotById(clubMemSlotId, callback) {
    ClubMemSlotModel.getClubMemSlotById(clubMemSlotId, callback);
  }

  static geSlotJoinedByClubMember(clubMem, callback) {
    ClubMemSlotModel.geSlotJoinedByClubMember(clubMem, callback);
  }

  static updateClubMemSlot(clubMemSlotId, updatedClubMemSlot, callback) {
    ClubMemSlotModel.updateClubMemSlot(
      clubMemSlotId,
      updatedClubMemSlot,
      callback
    );
  }

  static deleteClubMemSlot(clubMemSlotId, callback) {
    ClubMemSlotModel.deleteClubMemSlot(clubMemSlotId, callback);
  }

  static getNumberOfSlot(idSlot, callback) {
    ClubMemSlotModel.getNumberOfSlot(idSlot, callback);
  }
}

module.exports = ClubMemSlotService;
