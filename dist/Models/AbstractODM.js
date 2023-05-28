"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class AbstractODM {
    constructor(schema, modelName) {
        this.schema = schema;
        this.modelName = modelName;
        this.model = mongoose_1.models[this.modelName] || (0, mongoose_1.model)(this.modelName, this.schema);
    }
}
exports.default = AbstractODM;
//# sourceMappingURL=AbstractODM.js.map