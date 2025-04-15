import mongoose from "mongoose";

const linkSchema = new mongoose.Schema({
  originalLink: {
    type: String,
    required: [true, 'Link is required'],
  },

  shortLink: {
    type: String
  },
}, { timestamps: true });

const ShortLink = mongoose.model('ShortLink', linkSchema);

export default ShortLink;
