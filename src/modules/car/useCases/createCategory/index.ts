import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { CreateCategoriesUseCase } from "./CreateCategoryUseCase";
import { CreateCategoriesController } from "./CreateCategoryComproller";

const categoriesRepository = new CategoriesRepository();
const createCategoriesUseCase = new CreateCategoriesUseCase(categoriesRepository);
const createCategoriesController = new CreateCategoriesController(createCategoriesUseCase);

export {createCategoriesController};