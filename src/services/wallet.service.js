const Wallet = require("../models/wallet.model");

exports.getAllWallets = function (callback) {
  Wallet.getAllWallets(callback);
};

exports.createWallet = function (newWallet, callback) {
  Wallet.createWallet(newWallet, callback);
};

exports.getWalletById = function (walletId, callback) {
  Wallet.getWalletById(walletId, callback);
};

exports.addPoint = function (data, callback) {
  Wallet.addPoint(data, callback);
};

exports.decreaPoint = function (data, callback) {
  Wallet.decreaPoint(data, callback);
};

exports.getByMemberid = function (memberId, callback) {
  Wallet.getByMemberid(memberId, callback);
};

exports.updateWallet = function (walletId, updatedWallet, callback) {
  Wallet.updateWallet(walletId, updatedWallet, callback);
};

exports.deleteWallet = function (walletId, callback) {
  Wallet.deleteWallet(walletId, callback);
};
