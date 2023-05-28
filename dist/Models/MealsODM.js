"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AbstractODM_1 = require("./AbstractODM");
class MealODM extends AbstractODM_1.default {
    constructor() {
        const MealsSchema = new mongoose_1.Schema({
            idMeal: { type: String, required: true },
            strMeal: { type: String, required: true },
            strCategory: { type: String, required: true },
            strArea: { type: String, required: true },
            strInstructions: { type: String, required: true },
            strMealThumb: { type: String, required: true },
            strYoutube: { type: String, required: true },
            strIngredient1: { type: String },
            strIngredient2: { type: String },
            strIngredient3: { type: String },
            strIngredient4: { type: String },
            strIngredient5: { type: String },
            strIngredient6: { type: String },
            strIngredient7: { type: String },
            strIngredient8: { type: String },
            strIngredient9: { type: String },
            strIngredient10: { type: String },
            strIngredient11: { type: String },
            strIngredient12: { type: String },
            strIngredient13: { type: String },
            strIngredient14: { type: String },
            strIngredient15: { type: String },
            strIngredient16: { type: String },
            strIngredient17: { type: String },
            strIngredient18: { type: String },
            strIngredient19: { type: String },
            strIngredient20: { type: String },
            strMeasure1: { type: String },
            strMeasure2: { type: String },
            strMeasure3: { type: String },
            strMeasure4: { type: String },
            strMeasure5: { type: String },
            strMeasure6: { type: String },
            strMeasure7: { type: String },
            strMeasure8: { type: String },
            strMeasure9: { type: String },
            strMeasure10: { type: String },
            strMeasure11: { type: String },
            strMeasure12: { type: String },
            strMeasure13: { type: String },
            strMeasure14: { type: String },
            strMeasure15: { type: String },
            strMeasure16: { type: String },
            strMeasure17: { type: String },
            strMeasure18: { type: String },
            strMeasure19: { type: String },
            strMeasure20: { type: String },
        });
        super(MealsSchema, 'meals');
    }
    async createMealModel(produto) {
        const result = await this.model.create(produto);
        return result;
    }
    async findAllMealsModel() {
        const result = this.model.find({});
        return result;
    }
    async findMealModelId(id) {
        return this.model.findOne({ idMeal: id });
    }
    async findMealModelCategory(category) {
        const result = this.model.find({ strCategory: category });
        return result;
    }
    async findMealModelName(name) {
        const result = this.model.find({ strMeal: name });
        return result;
    }
    async findMealModelPrimaryLetter(letter) {
        const result = this.model.find({ strMeal: new RegExp(`^${letter}`, 'i') });
        return result;
    }
}
exports.default = MealODM;
//# sourceMappingURL=MealsODM.js.map