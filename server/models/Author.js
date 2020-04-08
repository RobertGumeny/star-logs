import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const Author = new Schema(
  {
    name: { type: String, required: true },
    rank: { type: ObjectId, ref: "Rank", required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Author;
