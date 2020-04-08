import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class LogsService {
  async getAll(query = {}) {
    let logs = await dbContext.Logs.find(query).populate({
      path: "author ship",
      populate: { path: "rank class", select: "title name" },
    });
    return logs;
  }
  async getById(id) {
    let log = await await dbContext.Logs.findById(id);
    if (!log) {
      throw new BadRequest("Invalid Id");
    }
    return log;
  }
  async create(body) {
    let log = await dbContext.Logs.create(body);
    return log;
  }
  async edit(id, body) {
    let log = await dbContext.Logs.findByIdAndUpdate(id, body, { new: true });
    return log;
  }

  async delete(id) {
    let log = await dbContext.Logs.findByIdAndDelete(id);
    return log;
  }
}

export const logsService = new LogsService();
