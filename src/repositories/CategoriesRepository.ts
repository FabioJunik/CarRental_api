import { Category} from "../model/Category";

interface ICreateCategoryDTO{
    name: string;
    description: string;
}

class CategoriesRepository {
    private categories: Category[];

    constructor(){
        this.categories = [];
    }

    create({name, description}:ICreateCategoryDTO){
        const category = new Category();

        Object.assign(category, {
            name,
            description,
            created_at: new Date()
        });
        
        this.categories.push(category);
    }
}

export {CategoriesRepository};