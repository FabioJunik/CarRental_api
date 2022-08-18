import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { CreateCategoriesUseCase } from "./CreateCategoryUseCase";
import { CreateCategoriesController } from "./CreateCategoryComproller";

const categoriesRepository =  CategoriesRepository.getInstance();
const createCategoriesUseCase = new CreateCategoriesUseCase(categoriesRepository);
const createCategoriesController = new CreateCategoriesController(createCategoriesUseCase);

export {createCategoriesController};