import { Category} from "../model/Category";
import {CategoriesRepository} from "../repositories/CategoriesRepository";


interface IRequest{
    name: string;
    description: string;
}

class CreateCategoriesServices {

    constructor(private categoriesRepository: CategoriesRepository) {}

    execute({name, description}:IRequest):void{
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);

        if(categoryAlreadyExists){
            throw new Error ("Category already exists!");
        }

        this.categoriesRepository.create({name, description});  
    }
}

export {CreateCategoriesServices};