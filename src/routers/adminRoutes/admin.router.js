const express = require("express");
const router = express.Router();
const AdmninController = require("../../controllers/adminControllers/admin.controller");

router.put("/club/:id", AdmninController.approve_club);

router.put("/sport/:id", AdmninController.approve_sport);

module.exports = router;
