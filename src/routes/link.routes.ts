import { Router } from "express";
import MessageResponse from "../interfaces/MessageResponse";
import { createShortLink } from "../controllers/link.controller";

const linkRouter = Router();

linkRouter.post<{}, MessageResponse>('/', createShortLink);

linkRouter.get<{}, MessageResponse>('/:id');

export default linkRouter;
