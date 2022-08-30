"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./main.ctrl");

router.get("/", ctrl.main);

router.get("/login", ctrl.login);

module.exports = router;