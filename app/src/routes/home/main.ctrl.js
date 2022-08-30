"use strict";

const main = (req, res) => {
    res.render("pages/index");
}

const login = (req, res) => {
    res.render("pages/login");
}

module.exports = {
    main,
    login,
};