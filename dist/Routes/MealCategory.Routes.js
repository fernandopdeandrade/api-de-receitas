"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MealCategoryController_1 = require("../Controllers/MealCategoryController");
const routesMealsCategory = (0, express_1.Router)();
routesMealsCategory.get('/meals-category', (req, res, next) => new MealCategoryController_1.default(req, res, next)
    .findAllMealsCategoryController());
routesMealsCategory.post('/create/meal-category', (req, res, next) => new MealCategoryController_1.default(req, res, next)
    .createMealCategoryController());
routesMealsCategory.get('/meal-category/:id', (req, res, next) => new MealCategoryController_1.default(req, res, next)
    .findMealCategoryControllerId());
exports.default = routesMealsCategory;
//# sourceMappingURL=MealCategory.Routes.js.map