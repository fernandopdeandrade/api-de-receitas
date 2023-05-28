"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MealService_1 = require("../Services/MealService");
class MealsController {
    constructor(req, res, next) {
        this.req = req;
        this.res = res;
        this.next = next;
        this.mealService = new MealService_1.default();
    }
    async createMealController() {
        const { ...n } = this.req.body;
        try {
            const meal = await this.mealService.createMealService({ ...n });
            return this.res.status(201).json(meal);
        }
        catch (error) {
            this.next(error);
        }
    }
    async findAllMealsController() {
        try {
            const meals = await this.mealService.findAllMealsService();
            return this.res.status(200).json(meals);
        }
        catch (error) {
            this.next(error);
        }
    }
    async findMealControllerId() {
        const { id } = this.req.params;
        try {
            const meal = await this.mealService.findMealServiceId(id);
            return this.res.status(200).json(meal);
        }
        catch (error) {
            this.next(error);
        }
    }
    async findMealControllerCategory() {
        const { category } = this.req.params;
        try {
            const meal = await this.mealService.findMealServiceCategory(category);
            return this.res.status(200).json(meal);
        }
        catch (error) {
            this.next(error);
        }
    }
    async findMealControllerName() {
        const { name } = this.req.params;
        try {
            const meal = await this.mealService.findMealServiceName(name);
            return this.res.status(200).json(meal);
        }
        catch (error) {
            this.next(error);
        }
    }
    async findMealControllerPrimaryLetter() {
        const { letter } = this.req.params;
        try {
            const meal = await this.mealService.findMealServicePrimaryLetter(letter);
            return this.res.status(200).json(meal);
        }
        catch (error) {
            this.next(error);
        }
    }
}
exports.default = MealsController;
//# sourceMappingURL=MealController.js.map