import {Router} from "express";
import {CategoriesRepository} from "../modules/car/repositories/CategoriesRepository";
import { CreateCategoriesServices } from "../modules/car/services/createCategoriesServices";


const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response)=>{
    const {name, description} = request.body;
    
    const createCategoriesServices = new CreateCategoriesServices(categoriesRepository);
    createCategoriesServices.execute({name, description});

    return response.status(201).send();    
});

categoriesRoutes.get("/", (request, response)=>{
    const allCategories = categoriesRepository.list();

    return response.json(allCategories);
});

export {categoriesRoutes};