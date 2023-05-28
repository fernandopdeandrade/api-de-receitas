"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MealsODM_1 = require("../Models/MealsODM");
class MealsService {
    constructor() {
        this.mealsModel = new MealsODM_1.default();
    }
    async createMealService(obj) {
        const objProduto = this.mealsModel;
        const result = await objProduto.createMealModel(obj);
        return result;
    }
    //   public async registerService(produto: IProduto) {
    //     const typedProduto = Produtos.createProdutosFactory(produto);
    //     // Saving example
    //     const newproduto: IProduto = {
    //       produtoNome: typedProduto.produtoNome,
    //       produtoValor: typedProduto.produtoValor,
    //       id: '633ec9fa3df977e30e993492',
    //     };
    //     await this.createProdutoService(newproduto);
    //     return this.createProdutoDomainService(newproduto);
    //   }
    async findAllMealsService() {
        const mealODM = this.mealsModel;
        const meals = await mealODM.findAllMealsModel();
        return meals;
    }
    async findMealServiceId(id) {
        const mealODM = this.mealsModel;
        const meal = await mealODM.findMealModelId(id);
        return meal;
    }
    async findMealServiceCategory(category) {
        const mealODM = this.mealsModel;
        const meal = await mealODM.findMealModelCategory(category);
        return meal;
    }
    async findMealServiceName(name) {
        const mealODM = this.mealsModel;
        const meal = await mealODM.findMealModelName(name);
        return meal;
    }
    async findMealServicePrimaryLetter(letter) {
        const mealODM = this.mealsModel;
        const meal = await mealODM.findMealModelPrimaryLetter(letter);
        return meal;
    }
}
exports.default = MealsService;
//# sourceMappingURL=MealService.js.map