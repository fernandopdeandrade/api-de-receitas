"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DrinkCategoryController_1 = require("../Controllers/DrinkCategoryController");
const routesDrinksCategory = (0, express_1.Router)();
routesDrinksCategory.get('/drinks-category', (req, res, next) => new DrinkCategoryController_1.default(req, res, next)
    .findAllDrinkCategoryController());
routesDrinksCategory.post('/create/drink-category', (req, res, next) => new DrinkCategoryController_1.default(req, res, next)
    .createDrinkCategoryController());
routesDrinksCategory.get('/drink-category/:id', (req, res, next) => new DrinkCategoryController_1.default(req, res, next)
    .findDrinkCategoryControllerId());
exports.default = routesDrinksCategory;
//# sourceMappingURL=DrinkCategory.Routes.js.map