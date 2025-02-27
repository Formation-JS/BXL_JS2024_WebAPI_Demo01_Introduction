import { Router } from "express";
import flowerController from "../controllers/flower.controller.js";


const flowerRouter = Router();

flowerRouter.route('/')
    .get(flowerController.getAll)
    .post(flowerController.add);

flowerRouter.route('/:id')
    .get(flowerController.getById)
    .put(flowerController.update)
    .delete(flowerController.delete)
    .head(flowerController.checkExists);

export default flowerRouter;