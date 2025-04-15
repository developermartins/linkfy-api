import mongoose from "mongoose";
import { SERVER_URL } from "../config/env";
import ShortLink from "../models/link.model";
import { randomCodeGen } from "../utils/codeGen";

import {
	StatusCodes,
} from 'http-status-codes';

export const createShortLink = async (req: any, res: any, next: any) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {

    const { originalLink } = req.body;

    const shortLinkId = randomCodeGen();

    const shortLink = `${SERVER_URL}/${shortLinkId}`;

    await ShortLink.create([{ originalLink, shortLink, shortLinkId }], { session });

    await session.commitTransaction();
    session.endSession();

    res.status(StatusCodes.CREATED).json({
      success: true,
      message: 'Link shortened!',
      shortLink,
    });
    
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    next(error);
  };
};

export const useShortLink = async (req: any, res: any, next: any) => {
  try {

    const { id } = req.params;
    
    const data = await ShortLink.findOne({ shortLinkId: id }).exec();

    res.redirect(data?.originalLink);
  } catch (error) {
    next(error);
  };
};
