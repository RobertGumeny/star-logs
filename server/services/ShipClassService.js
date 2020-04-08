import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class ShipClassService {
  async getAll(query = {}) {
    let shipClass = await dbContext.ShipClass.find(query);
    return shipClass;
  }
  async getById(id) {
    let shipClass = await dbContext.ShipClass.findById(id);
    if (!shipClass) {
      throw new BadRequest("Invalid Id");
    }
    return shipClass;
  }
  async create(body) {
    let shipClass = await dbContext.ShipClass.create(body);
    return shipClass;
  }
  async edit(id, body) {
    let shipClass = await dbContext.ShipClass.findByIdAndUpdate(id, body, {
      new: true,
    });
    return shipClass;
  }
  async delete(id) {
    let shipClass = await dbContext.ShipClass.findByIdAndDelete(id);
    return shipClass;
  }
}

export const shipClassService = new ShipClassService();
