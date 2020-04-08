import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const Log = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    ship: { type: ObjectId, ref: "Ship", required: true },
    author: { type: ObjectId, ref: "Author", required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Log;
