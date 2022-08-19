import  {Router} from "express";
import {categoriesRoutes} from '../routes/categories.routes';
import { specificationRoutes } from '../routes/specification.routes';

const router = Router();

router.use("/categories",categoriesRoutes);
router.use("/specification",specificationRoutes);

export {router};