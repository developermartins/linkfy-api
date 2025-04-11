import { Router } from "express";
import MessageResponse from "../interfaces/MessageResponse";

const linkRouter = Router();

linkRouter.post<{}, MessageResponse>('/create');

linkRouter.get<{}, MessageResponse>('/:id');

export default linkRouter;
