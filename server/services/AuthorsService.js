import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class AuthorsService {
  async getAll(query = {}) {
    let authors = await dbContext.Authors.find(query);
    return authors;
  }
  async getById(id) {
    let author = await await dbContext.Authors.findById(id);
    if (!author) {
      throw new BadRequest("Invalid Id");
    }
    return author;
  }
  async create(body) {
    let author = await dbContext.Authors.create(body);
    return author;
  }
  async edit(id, body) {
    let author = await dbContext.Authors.findByIdAndUpdate(id, body, {
      new: true,
    });
    return author;
  }

  async delete(id) {
    let author = await dbContext.Authors.findByIdAndDelete(id);
    return author;
  }
}

export const authorsService = new AuthorsService();
