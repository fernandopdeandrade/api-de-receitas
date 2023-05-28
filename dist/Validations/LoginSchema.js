"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const joi = require("joi");
const loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
});
exports.default = loginSchema;
//# sourceMappingURL=LoginSchema.js.map