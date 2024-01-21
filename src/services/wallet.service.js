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

exports.updateWallet = function (walletId, updatedWallet, callback) {
  Wallet.updateWallet(walletId, updatedWallet, callback);
};

exports.deleteWallet = function (walletId, callback) {
  Wallet.deleteWallet(walletId, callback);
};
