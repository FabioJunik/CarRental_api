import {Router} from "express";

import { createCategoriesController } from "../modules/car/useCases/createCategory";
import { listCategoriesController } from "../modules/car/useCases/listCategories";


const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response)=>{
    return createCategoriesController.handle(request, response);   
});

categoriesRoutes.get("/", (request, response)=>{
   return listCategoriesController.handle(request, response);
});

export {categoriesRoutes};