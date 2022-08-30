"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./main.ctrl");

router.get("/", ctrl.output.main);
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);

module.exports = router;