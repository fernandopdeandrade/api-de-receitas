"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
require("dotenv/config");
const MONGO_DB_URL = process.env.MONGO_DB_URL || 'mongodb://localhost:27017/app-recipes';
const connectToDatabase = (mongoDatabaseURI = MONGO_DB_URL || MONGO_DB_URL) => mongoose_1.default.connect(mongoDatabaseURI);
exports.default = connectToDatabase;
//# sourceMappingURL=Connection.js.map