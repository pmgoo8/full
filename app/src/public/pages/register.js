"use strict";

const name = document.querySelector("#name"),
    id = document.querySelector("#id"),
    password = document.querySelector("#password"),
    passwordc = document.querySelector("#passwordc"),
    email = document.querySelector("#email"),
    registBtn = document.querySelector("#registBtn");

registBtn.addEventListener("click", register);

function register() {
    if (!name.value) return alert("이름을 입력해 주십시오.");
    if (!id.value) return alert("아이디를 입력해 주십시오.");
    if (!password.value) return alert("비밀번호를 입력해 주십시오.");
    if (password.value !== passwordc.value){
        passwordc.value = "";
        return alert("비밀번호가 일치하지 않습니다.");
    }
    if (!email.value) return alert("이메일을 입력해 주십시오.");

    const req = {
        name: name.value,
        id: id.value,
        password: password.value,
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