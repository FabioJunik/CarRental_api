import {Router} from "express";
import multer from "multer";

import { createCategoriesController } from "../modules/car/useCases/createCategory";
import { importCategoryController } from "../modules/car/useCases/importCategory";
import { listCategoriesController } from "../modules/car/useCases/listCategories";


const categoriesRoutes = Router();

const update = multer({
    dest: './tmp',
})

categoriesRoutes.post("/", (request, response)=>{
    return createCategoriesController.handle(request, response);   
});

categoriesRoutes.get("/", (request, response)=>{
   return listCategoriesController.handle(request, response);
});

categoriesRoutes.post("/import", update.single("file"), (request, response)=>{
    return importCategoryController.handle(request,response);
})

export {categoriesRoutes};