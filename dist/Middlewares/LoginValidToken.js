"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JwtToken_1 = require("../utils/JwtToken");
const tokenValidation = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Token not found' });
    }
    try {
        const decoded = await (0, JwtToken_1.verifyToken)(token);
        res.locals.user = decoded;
        next();
    }
    catch (error) {
        return res.status(401).json({ message: 'Token must be a valid token' });
    }
};
exports.default = tokenValidation;
//# sourceMappingURL=LoginValidToken.js.map