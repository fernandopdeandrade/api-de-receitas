"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DrinksCategoryService_1 = require("../Services/DrinksCategoryService");
class DrinksCategoryController {
    constructor(req, res, next) {
        this.req = req;
        this.res = res;
        this.next = next;
        this.drinksCategoryService = new DrinksCategoryService_1.default();
    }
    async createDrinkCategoryController() {
        const { ...n } = this.req.body;
        try {
            const drink = await this.drinksCategoryService.createDrinkCategoryService({ ...n });
            return this.res.status(201).json(drink);
        }
        catch (error) {
            this.next(error);
        }
    }
    async findAllDrinkCategoryController() {
        try {
            const drinks = await this.drinksCategoryService.findAllDrinkCategoryService();
            return this.res.status(200).json(drinks);
        }
        catch (error) {
            this.next(error);
        }
    }
    async findDrinkCategoryControllerId() {
        const { id } = this.req.params;
        try {
            const drinks = await this.drinksCategoryService.findDrinkCategoryServiceId(id);
            return this.res.status(200).json(drinks);
        }
        catch (error) {
            this.next(error);
        }
    }
}
exports.default = DrinksCategoryController;
//# sourceMappingURL=DrinkCategoryController.js.map