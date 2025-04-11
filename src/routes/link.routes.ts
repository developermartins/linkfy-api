import { Router } from "express";

const linkRouter = Router();

linkRouter.post('/create');

linkRouter.get('/:id');

export default linkRouter;
