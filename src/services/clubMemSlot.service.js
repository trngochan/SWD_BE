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

  static comfirm_joining(clubMemId, SlotId, inforWallet, tranPoint, callback) {
    ClubMemSlotModel.comfirm_joining(clubMemId, SlotId, function (result) {
      const idWallet = inforWallet.id;
      console.log("id", result.result);
      if (result.status === "success") {
        TransactionHistoryPoint.createTransactionHistoryPointWhenConfirmJoinSlot(
          inforWallet,
          tranPoint,
          result.result,
          (response) => {
            Wallet.addPoint(
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
        );
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
