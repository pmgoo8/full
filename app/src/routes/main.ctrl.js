"use strict";

const User = require("../model/User");

const output = {
    main: (req, res) => {
        res.render("index");
    },
    login: (req, res) => {
        res.render("login");
    },
};

const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        console.log(response);
        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};