import { Router } from 'express';
import * as service from '../service/service';

const CatController = Router();

CatController.get('/',service.getAll)
CatController.get('/:id',service.getById)
CatController.post('/',service.createOne)

export { CatController}