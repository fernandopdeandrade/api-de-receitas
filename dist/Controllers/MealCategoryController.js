"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MealsCategoryService_1 = require("../Services/MealsCategoryService");
class MealsCategoryController {
    constructor(req, res, next) {
        this.req = req;
        this.res = res;
        this.next = next;
        this.mealsCategoryService = new MealsCategoryService_1.default();
    }
    async createMealCategoryController() {
        const { ...n } = this.req.body;
        try {
            const Meals = await this.mealsCategoryService.createMealCategoryService({ ...n });
            return this.res.status(201).json(Meals);
        }
        catch (error) {
            this.next(error);
        }
    }
    async findAllMealsCategoryController() {
        try {
            const Meals = await this.mealsCategoryService.findAllMealsCategoryService();
            return this.res.status(200).json(Meals);
        }
        catch (error) {
            this.next(error);
        }
    }
    async findMealCategoryControllerId() {
        const { id } = this.req.params;
        try {
            const Meals = await this.mealsCategoryService.findMealCategoryServiceId(id);
            return this.res.status(200).json(Meals);
        }
        catch (error) {
            this.next(error);
        }
    }
}
exports.default = MealsCategoryController;
//# sourceMappingURL=MealCategoryController.js.map