"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DrinksODM_1 = require("../Models/DrinksODM");
class DrinksService {
    constructor() {
        this.drinksModel = new DrinksODM_1.default();
    }
    async createDrinkService(obj) {
        const objProduto = this.drinksModel;
        const result = await objProduto.createDrinkModel(obj);
        return result;
    }
    async findAllDrinkService() {
        const drinkODM = this.drinksModel;
        const drinks = await drinkODM.findAllDrinksModel();
        return drinks;
    }
    async findDrinkServiceId(id) {
        const drinkODM = this.drinksModel;
        const drink = await drinkODM.findDrinkModelId(id);
        return drink;
    }
    async findDrinkServiceCategory(category) {
        const drinkODM = this.drinksModel;
        const drink = await drinkODM.findDrinkModelCategory(category);
        return drink;
    }
    async findDrinkServiceName(name) {
        const drinkODM = this.drinksModel;
        const drink = await drinkODM.findDrinkModelName(name);
        return drink;
    }
    async findDrinkServicePrimaryLetter(letter) {
        const drinkODM = this.drinksModel;
        const drink = await drinkODM.findDrinkModelPrimaryLetter(letter);
        return drink;
    }
}
exports.default = DrinksService;
//# sourceMappingURL=DrinkService.js.map