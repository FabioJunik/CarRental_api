import { Router} from "express";
import {SpecificationRepository} from "../modules/car/repositories/SpecificationRepository";
import { CreateSpecificationServce } from "../modules/car/services/CreateSpacificationService";

const specificationRoutes = Router();
const spedificationRepository = new SpecificationRepository();

specificationRoutes.post("/", (request, response)=>{
    const {name, description} = request.body;
    const createSpecificationService = new CreateSpecificationServce(spedificationRepository);

    createSpecificationService.execute({name, description});

    return response.status(201).send();
});

export {specificationRoutes};