import AuthorSchema from "../models/Author";
import ShipClassSchema from "../models/ShipClass";
import CommentSchema from "../models/Comment";
import LogSchema from "../models/Log";
import RankSchema from "../models/Rank";
import ShipSchema from "../models/Ship";
import mongoose from "mongoose";

class DbContext {
  Authors = mongoose.model("Author", AuthorSchema);
  ShipClass = mongoose.model("ShipClass", ShipClassSchema);
  Comments = mongoose.model("Comment", CommentSchema);
  Logs = mongoose.model("Log", LogSchema);
  Ranks = mongoose.model("Rank", RankSchema);
  Ships = mongoose.model("Ship", ShipSchema);
}

export const dbContext = new DbContext();
