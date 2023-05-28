"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loginValidMiddleware = (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'All fields must be filled' });
    }
    next();
};
exports.default = loginValidMiddleware;
//# sourceMappingURL=LoginValidMiddleware.js.map