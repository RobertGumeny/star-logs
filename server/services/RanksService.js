import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class RanksService {
  async getAll(query = {}) {
    let ranks = await dbContext.Ranks.find(query);
    return ranks;
  }
  async getById(id) {
    let rank = await await dbContext.Ranks.findById(id);
    if (!rank) {
      throw new BadRequest("Invalid Id");
    }
    return rank;
  }
  async create(body) {
    let rank = await dbContext.Ranks.create(body);
    return rank;
  }
  async edit(id, body) {
    let rank = await dbContext.Ranks.findByIdAndUpdate(id, body, { new: true });
    return rank;
  }

  async delete(id) {
    let rank = await dbContext.Ranks.findByIdAndDelete(id);
    return rank;
  }
}

export const ranksService = new RanksService();
