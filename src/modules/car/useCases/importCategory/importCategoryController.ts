import { Request, Response } from "express";
import { ImportCategoryUseCase } from "./importCategoryUseCase";


class ImportCategoryController {
    constructor(private importCategoryUseCase: ImportCategoryUseCase){}

    handle(resquest: Request, response: Response): Response {
        const {file} = resquest;    

        this.importCategoryUseCase.execute(file);
        
        return response.send();
    }  
}

export {ImportCategoryController};