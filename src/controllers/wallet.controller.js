const WalletService = require("../services/wallet.service");

exports.get_list = function (req, res) {
  WalletService.getAllWallets(function (result) {
    if (result.status === "success") {
      res.status(200).json({ result: result.result });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};

exports.create = function (req, res) {
  const newWallet = req.body;
  WalletService.createWallet(newWallet, function (result) {
    if (result.status === "success") {
      res.status(200).json({ message: result.message });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};

exports.get_wallet = function (req, res) {
  const walletId = req.params.id;
  WalletService.getWalletById(walletId, function (result) {
    if (result.status === "success") {
      res.status(200).json({ result: result.result });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};

exports.update_wallet = function (req, res) {
  const walletId = req.params.id;
  const updatedWallet = req.body;
  WalletService.updateWallet(walletId, updatedWallet, function (result) {
    if (result.status === "success") {
      res.status(200).json({ message: result.message });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};

exports.delete_wallet = function (req, res) {
  const walletId = req.params.id;
  WalletService.deleteWallet(walletId, function (result) {
    if (result.status === "success") {
      res.status(200).json({ message: result.message });
    } else if (result.status === "error") {
      res.status(404).json({ message: result.message });
    }
  });
};
