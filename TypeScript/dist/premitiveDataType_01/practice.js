"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = {
    name: "mamoonkhan",
    age: 18,
    admin: true
};
function userHandle(user) {
    if (user.admin) {
        return `you are fucking admin`;
    }
    if (user.age <= 12) {
        return `your are a boy not eligible`;
    }
    return `you are eligble for the application ${user.name}`;
}
let users = userHandle(user);
console.log(users);
//# sourceMappingURL=practice.js.map