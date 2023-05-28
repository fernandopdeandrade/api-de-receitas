"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DrinkController_1 = require("../Controllers/DrinkController");
const routesDrinks = (0, express_1.Router)();
routesDrinks.get('/drinks', (req, res, next) => new DrinkController_1.default(req, res, next)
    .findAllDrinkController());
routesDrinks.post('/create/drink', (req, res, next) => new DrinkController_1.default(req, res, next)
    .createDrinkController());
routesDrinks.get('/drink/:id', (req, res, next) => new DrinkController_1.default(req, res, next)
    .findDrinkControllerId());
routesDrinks.get('/drink/category/:category', (req, res, next) => new DrinkController_1.default(req, res, next)
    .findDrinkControllerCategory());
routesDrinks.get('/drink/name/:name', (req, res, next) => new DrinkController_1.default(req, res, next)
    .findDrinkControllerName());
routesDrinks.get('/drink/letter/:letter', (req, res, next) => new DrinkController_1.default(req, res, next)
    .findDrinkControllerPrimaryLetter());
exports.default = routesDrinks;
//# sourceMappingURL=Drink.Routes.js.map