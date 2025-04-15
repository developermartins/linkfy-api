import mongoose from "mongoose";
import { LinkInterface } from "../interfaces/LinkInterface";

const linkSchema = new mongoose.Schema<LinkInterface>({
  originalLink: {
    type: String,
    required: [true, 'Link is required'],
  },

  shortLink: {
    type: String
  },

  shortLinkId: {
    type: String
  },
}, { timestamps: true });

const ShortLink = mongoose.model<LinkInterface>('ShortLink', linkSchema);

export default ShortLink;
