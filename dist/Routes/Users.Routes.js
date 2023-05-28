"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsersController_1 = require("../Controllers/UsersController");
const LoginValidMiddleware_1 = require("../Middlewares/LoginValidMiddleware");
const LoginValidToken_1 = require("../Middlewares/LoginValidToken");
const routesUser = (0, express_1.Router)();
routesUser.get('/user/all', (req, res, next) => new UsersController_1.default(req, res, next)
    .findAllUserController());
routesUser.post('/login', LoginValidMiddleware_1.default, (req, res, next) => new UsersController_1.default(req, res, next)
    .loginUserController());
routesUser.get('/login/role', LoginValidToken_1.default, (req, res) => UsersController_1.default.roleAuthorization(req, res));
routesUser.post('/register', (req, res, next) => new UsersController_1.default(req, res, next)
    .createUserController());
exports.default = routesUser;
//# sourceMappingURL=Users.Routes.js.map