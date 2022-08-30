"use strict";

const output = {
    main: (req, res) => {
        res.render("index");
    },
    login: (req, res) => {
        res.render("login");
    },
};

const users = {
    id: ["jeyeon43", "sonjaeyeon43"],
    password: ["1234", "4567"],
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
            password = req.body.password;

        if(users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if(users.password[idx] === password) {
                return res.json({
                    success: true,
                });
            }
        }
        return res.json({
            success: false,
            msg: "로그인에 실패하였습니다.",
        });
    },
};

module.exports = {
    output,
    process,
};