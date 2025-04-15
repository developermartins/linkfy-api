import mongoose from "mongoose";

const linkSchema = new mongoose.Schema({
  link: {
    type: String,
    required: [true, 'Link is required'],
  },

  shortLink: {
    type: String
  },
}, { timestamps: true });

const ShortLink = mongoose.model('ShortLink', linkSchema);

export default ShortLink;
