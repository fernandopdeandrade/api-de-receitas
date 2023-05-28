"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.createToken = void 0;
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const secret = process.env.JWT_SECRET || 'secret';
const JWT_CONFIG = {
    expiresIn: '7d',
    algorithm: 'HS256',
};
const createToken = async (data) => jwt.sign({ data }, secret, JWT_CONFIG);
exports.createToken = createToken;
const verifyToken = async (token) => jwt.verify(token, secret);
exports.verifyToken = verifyToken;
//# sourceMappingURL=JwtToken.js.map