"use strict";

const db = require("../config/db");

class UserStorage { 
    
    static getUserInfo(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM person WHERE id = ?";
            db.query(query, [id], (err, data) => {
                if(err) reject(`${err}`);
                console.log(data[0]);
                resolve(data[0]);
            });
        });
    }

    static async save(userInfo) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO person(name, id, password, email) VALUES(?, ?, ?, ?)";
            db.query(query,
                [userInfo.name, userInfo.id, userInfo.password, userInfo.email], (err) => {
                if(err) reject(`${err}`);
                resolve({ success: true} );
            });
        });
    }
}

module.exports = UserStorage;