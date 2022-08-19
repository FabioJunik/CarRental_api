import { parse as csvParse } from "csv-parse";
import fs from "fs";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IImportCategory{
    name: string;
    description: string;
}

class ImportCategoryUseCase{
    constructor(private categoriesRepository: ICategoriesRepository){}

    loadCategory(file: Express.Multer.File):Promise<IImportCategory[]>{
        return new Promise((resolse, resject)=>{
            const categories: IImportCategory[]=[];
            const stream = fs.createReadStream(file.path);
            const parseFile = csvParse();
            
            stream.pipe(parseFile);
        
            parseFile.on('data', async (line)=>{
                const [name, description] = line;
                categories.push({name, description});
            }).
            on('end',  ()=>{
                resolse(categories)
            })
            .on('error',(error)=>{
                resject(error);
            });
        });
        
    }

    async execute(file: Express.Multer.File):Promise<void>{
        const categories = await this.loadCategory(file);
        
        categories.map(async({name, description})=>{
            const existsCategory = this.categoriesRepository.findByName(name);

            if(!existsCategory){
                this.categoriesRepository.create({
                    name,
                    description
                })
            }
        })
    }
}

export {ImportCategoryUseCase};