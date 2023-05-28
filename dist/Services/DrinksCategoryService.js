"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DrinksCategoryODM_1 = require("../Models/DrinksCategoryODM");
class DrinksCategoryService {
    constructor() {
        this.drinksCategoryModel = new DrinksCategoryODM_1.default();
    }
    async createDrinkCategoryService(obj) {
        const objDrink = this.drinksCategoryModel;
        const result = await objDrink.createDrinkCategoryModel(obj);
        return result;
    }
    async findAllDrinkCategoryService() {
        const drinkODM = this.drinksCategoryModel;
        const drinks = await drinkODM.findAllDrinksCategoryModel();
        return drinks;
    }
    async findDrinkCategoryServiceId(id) {
        const drinkODM = this.drinksCategoryModel;
        const drink = await drinkODM.findDrinkCategoryModelId(id);
        return drink;
    }
}
exports.default = DrinksCategoryService;
//# sourceMappingURL=DrinksCategoryService.js.map