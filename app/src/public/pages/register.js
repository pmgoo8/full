"use strict";

const name = document.querySelector("#name"),
    id = document.querySelector("#id"),
    password = document.querySelector("#password"),
    passwordc = document.querySelector("#passwordc"),
    email = document.querySelector("#email"),
    registBtn = document.querySelector("#registBtn");

registBtn.addEventListener("click", register);

function register() {
    const req = {
        name: name.value,
        id: id.value,
        password: password.value,
        passwordc: passwordc.value,
        email: email.value,
    };

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req),
    }).then((res) => res.json())
    .then((res) => {
        if(res.success) {
            location.href="/login";
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error("회원가입 중 에러 발생");
    });
}