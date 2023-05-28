"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AbstractODM_1 = require("./AbstractODM");
class MealsCategoryODM extends AbstractODM_1.default {
    constructor() {
        const MealsCategorySchema = new mongoose_1.Schema({
            strCategory: { type: String, required: true },
        });
        super(MealsCategorySchema, 'meals-categorie');
    }
    async createMealCategoryModel(produto) {
        const meal = await this.model.create(produto);
        return meal;
    }
    async findAllMealsCategoryModel() {
        const meals = this.model.find({});
        return meals;
    }
    async findMealCategoryModelId(id) {
        return this.model.findOne({ _id: id });
    }
}
exports.default = MealsCategoryODM;
//# sourceMappingURL=MealsCategoryODM.js.map