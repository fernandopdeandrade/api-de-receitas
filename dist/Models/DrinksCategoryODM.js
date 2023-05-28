"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AbstractODM_1 = require("./AbstractODM");
class DrinksCategoryODM extends AbstractODM_1.default {
    constructor() {
        const DrinksCategorySchema = new mongoose_1.Schema({
            strCategory: { type: String, required: true },
        });
        super(DrinksCategorySchema, 'Drinks-categorie');
    }
    async createDrinkCategoryModel(produto) {
        const result = await this.model.create(produto);
        return result;
    }
    async findAllDrinksCategoryModel() {
        const drinks = this.model.find({});
        return drinks;
    }
    async findDrinkCategoryModelId(id) {
        return this.model.findOne({ _id: id });
    }
}
exports.default = DrinksCategoryODM;
//# sourceMappingURL=DrinksCategoryODM.js.map