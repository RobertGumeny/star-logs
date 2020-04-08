import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class CommentsService {
  async getAll(query = {}) {
    let comments = await dbContext.Comments.find(query);
    return comments;
  }
  async getById(id) {
    let comment = await await dbContext.Comments.findById(id);
    if (!comment) {
      throw new BadRequest("Invalid Id");
    }
    return comment;
  }
  async create(body) {
    let comment = await dbContext.Comments.create(body);
    return comment;
  }
  async edit(id, body) {
    let comment = await dbContext.Comments.findByIdAndUpdate(id, body, {
      new: true,
    });
    return comment;
  }

  async delete(id) {
    let comment = await dbContext.Comments.findByIdAndDelete(id);
    return comment;
  }
}

export const commentsService = new CommentsService();
