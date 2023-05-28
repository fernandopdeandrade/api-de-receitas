"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DrinkService_1 = require("../Services/DrinkService");
class DrinksController {
    constructor(req, res, next) {
        this.req = req;
        this.res = res;
        this.next = next;
        this.drinksService = new DrinkService_1.default();
    }
    async createDrinkController() {
        const { ...n } = this.req.body;
        try {
            const drink = await this.drinksService.createDrinkService({ ...n });
            return this.res.status(201).json(drink);
        }
        catch (error) {
            this.next(error);
        }
    }
    async findAllDrinkController() {
        try {
            const drinks = await this.drinksService.findAllDrinkService();
            return this.res.status(200).json(drinks);
        }
        catch (error) {
            this.next(error);
        }
    }
    async findDrinkControllerId() {
        const { id } = this.req.params;
        try {
            const drinks = await this.drinksService.findDrinkServiceId(id);
            return this.res.status(200).json(drinks);
        }
        catch (error) {
            this.next(error);
        }
    }
    async findDrinkControllerCategory() {
        const { category } = this.req.params;
        try {
            const drinks = await this.drinksService.findDrinkServiceCategory(category);
            return this.res.status(200).json(drinks);
        }
        catch (error) {
            this.next(error);
        }
    }
    async findDrinkControllerName() {
        const { name } = this.req.params;
        try {
            const drink = await this.drinksService.findDrinkServiceName(name);
            return this.res.status(200).json(drink);
        }
        catch (error) {
            this.next(error);
        }
    }
    async findDrinkControllerPrimaryLetter() {
        const { letter } = this.req.params;
        try {
            const drink = await this.drinksService.findDrinkServicePrimaryLetter(letter);
            return this.res.status(200).json(drink);
        }
        catch (error) {
            this.next(error);
        }
    }
}
exports.default = DrinksController;
//# sourceMappingURL=DrinkController.js.map