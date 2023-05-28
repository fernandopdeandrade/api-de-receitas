"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MealController_1 = require("../Controllers/MealController");
const routesMeals = (0, express_1.Router)();
routesMeals.get('/meals', (req, res, next) => new MealController_1.default(req, res, next)
    .findAllMealsController());
routesMeals.post('/create/meal', (req, res, next) => new MealController_1.default(req, res, next)
    .createMealController());
routesMeals.get('/meal/:id', (req, res, next) => new MealController_1.default(req, res, next)
    .findMealControllerId());
routesMeals.get('/meal/category/:category', (req, res, next) => new MealController_1.default(req, res, next)
    .findMealControllerCategory());
routesMeals.get('/meal/name/:name', (req, res, next) => new MealController_1.default(req, res, next)
    .findMealControllerName());
routesMeals.get('/meal/letter/:letter', (req, res, next) => new MealController_1.default(req, res, next)
    .findMealControllerPrimaryLetter());
exports.default = routesMeals;
//# sourceMappingURL=Meal.Routes.js.map