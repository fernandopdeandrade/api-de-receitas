"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcryptjs");
const JwtToken_1 = require("../utils/JwtToken");
const UsersODM_1 = require("../Models/UsersODM");
const InputLogin_1 = require("../Validations/InputLogin");
const infoUserAdmin = {
    email: process.env.ADMIN_EMAIL,
    password: process.env.ADMIN_PASSWORD,
};
class UserService {
    constructor() {
        this.model = new UsersODM_1.default();
    }
    static async isAdminOrUser(email, password) {
        const { email: adminEmail, password: adminPassword } = infoUserAdmin;
        if (email === adminEmail && password === adminPassword) {
            return true;
        }
        return false;
    }
    async loginUserService(email, password) {
        const resultUser = await this
            .model.loginUserModel({ email });
        const error = (0, InputLogin_1.default)({ email, password });
        if (error || resultUser === null) {
            return UserService.errorResponse(401, 'Invalid email or password 1');
        }
        const passwordCrypt = bcrypt
            .compareSync(password, resultUser === null || resultUser === void 0 ? void 0 : resultUser.password);
        if (!resultUser || !passwordCrypt) {
            return UserService.errorResponse(401, 'Invalid email or password');
        }
        const { id, role, username } = resultUser;
        const token = await (0, JwtToken_1.createToken)({ id, email, role, username });
        return UserService.successResponse(200, { token });
    }
    async findAllUserService() {
        const users = await this.model.findAllUserModel();
        return UserService.successResponse(200, users);
    }
    async createUserService(user) {
        const { username, email, password } = user;
        let { role } = user;
        const userExists = await this.model.findUserByEmailModel(email);
        if (userExists) {
            return UserService.errorResponse(409, 'User already exists');
        }
        if (await UserService.isAdminOrUser(email, password)) {
            role = 'admin';
        }
        else {
            role = 'user';
        }
        const cryptUserPassword = bcrypt.hashSync(password, 10);
        const newUser = await this.model.createUserModel({
            username, role, email, password: cryptUserPassword,
        });
        return UserService.successResponse(201, newUser);
    }
    async findUserByEmailService(email) {
        const user = await this.model.findUserByEmailModel(email);
        if (!user) {
            return UserService.errorResponse(404, 'User not found');
        }
        return UserService.successResponse(200, user);
    }
    static successResponse(status, message) {
        return { status, message };
    }
    static errorResponse(status, message) {
        return { status, message };
    }
}
exports.default = UserService;
//# sourceMappingURL=UsersService.js.map