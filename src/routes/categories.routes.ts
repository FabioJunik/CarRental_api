import {Router} from "express";
import {CategoriesRepository} from "../modules/car/repositories/CategoriesRepository";
import { createCategoriesController } from "../modules/car/useCases/createCategory";


const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response)=>{
    return createCategoriesController.handle(request, response);   
});

categoriesRoutes.get("/", (request, response)=>{
    const allCategories = categoriesRepository.list();

    return response.json(allCategories);
});

export {categoriesRoutes};