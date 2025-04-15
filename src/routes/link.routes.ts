import { Router } from "express";
import MessageResponse from "../interfaces/MessageResponse";
import { createShortLink, useShortLink } from "../controllers/link.controller";

const linkRouter = Router();

linkRouter.post<{}, MessageResponse>('/create', createShortLink);

linkRouter.get<{}, MessageResponse>('/:id', useShortLink);

export default linkRouter;
