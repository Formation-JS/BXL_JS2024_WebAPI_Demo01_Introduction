import { Router } from "express";
import flowerRouter from "./flower.router.js";


/**
 * Router qui centralise tous les routers de l'API
 */
const mainRouter = Router();


mainRouter.use('/flower', flowerRouter);
// mainRouter.use('/tree', treeRouter);


export default mainRouter;