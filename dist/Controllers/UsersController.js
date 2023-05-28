"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UsersService_1 = require("../Services/UsersService");
class UsersController {
    constructor(req, res, next) {
        this.req = req;
        this.res = res;
        this.next = next;
        this.usersService = new UsersService_1.default();
    }
    async loginUserController() {
        const { email, password } = this.req.body;
        try {
            const user = await this.usersService.loginUserService(email, password);
            return this.res.status(200).json(user);
        }
        catch (error) {
            this.next(error);
        }
    }
    async findAllUserController() {
        try {
            const users = await this.usersService.findAllUserService();
            return this.res.status(200).json(users);
        }
        catch (error) {
            this.next(error);
        }
    }
    static async roleAuthorization(_req, res) {
        const { locals: { user: { data: { role } } } } = res;
        return res.status(200).json({ role });
    }
    async createUserController() {
        const user = this.req.body;
        try {
            const newUser = await this.usersService.createUserService(user);
            return this.res.status(201).json(newUser);
        }
        catch (error) {
            this.next(error);
        }
    }
}
exports.default = UsersController;
//# sourceMappingURL=UsersController.js.map