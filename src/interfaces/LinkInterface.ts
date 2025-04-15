import mongoose, { ObjectId } from "mongoose";

export interface LinkInterface extends mongoose.Document {
  id?: ObjectId,
  originalLink: string,
  shortLink?: string,
  shortLinkId?: string
};
