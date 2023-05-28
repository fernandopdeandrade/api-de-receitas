"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LoginSchema_1 = require("./LoginSchema");
const inputLogin = (user) => {
    const { error } = LoginSchema_1.default.validate(user);
    if (error) {
        return error;
    }
    return null;
};
exports.default = inputLogin;
//# sourceMappingURL=InputLogin.js.map