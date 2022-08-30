"use strict";

class UserStorage {
    static #users = {
        id: ["jeyeon43", "sonjaeyeon43"],
        password: ["1234", "4567"],
        name: ["제연", "손제연"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;