import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const Ship = new Schema(
  {
    name: { type: String, required: true },
    class: { type: ObjectId, ref: "ShipClass", required: true },
    description: { type: String, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Ship;
