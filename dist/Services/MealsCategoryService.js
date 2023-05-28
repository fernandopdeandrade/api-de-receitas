"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MealsCategoryODM_1 = require("../Models/MealsCategoryODM");
class MealsCategoryService {
    constructor() {
        this.mealsCategoryModel = new MealsCategoryODM_1.default();
    }
    async createMealCategoryService(obj) {
        const objMeal = this.mealsCategoryModel;
        const result = await objMeal.createMealCategoryModel(obj);
        return result;
    }
    async findAllMealsCategoryService() {
        const mealODM = this.mealsCategoryModel;
        const meals = await mealODM.findAllMealsCategoryModel();
        return meals;
    }
    async findMealCategoryServiceId(id) {
        const mealODM = this.mealsCategoryModel;
        const meal = await mealODM.findMealCategoryModelId(id);
        return meal;
    }
}
exports.default = MealsCategoryService;
//# sourceMappingURL=MealsCategoryService.js.map