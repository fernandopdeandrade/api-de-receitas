"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AbstractODM_1 = require("./AbstractODM");
class UserODM extends AbstractODM_1.default {
    constructor() {
        const userSchema = new mongoose_1.Schema({
            username: { type: String, required: true },
            role: { type: String, required: false },
            email: { type: String, required: true },
            password: { type: String, required: true },
        });
        super(userSchema, 'users');
    }
    async loginUserModel(user) {
        const result = this.model.findOne({ email: user.email });
        return result;
    }
    async createUserModel(user) {
        return this.model.create(user);
    }
    async findAllUserModel() {
        return this.model.find({});
    }
    async findUserByEmailModel(email) {
        return this.model.findOne({ email });
    }
}
exports.default = UserODM;
//# sourceMappingURL=UsersODM.js.map