import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class ShipsService {
  async getAll(query = {}) {
    let ships = await dbContext.Ships.find(query);
    return ships;
  }
  async getById(id) {
    let ship = await await dbContext.Ships.findById(id);
    if (!ship) {
      throw new BadRequest("Invalid Id");
    }
    return ship;
  }
  async create(body) {
    let ship = await dbContext.Ships.create(body);
    return ship;
  }
  async edit(id, body) {
    let ship = await dbContext.Ships.findByIdAndUpdate(id, body, { new: true });
    return ship;
  }

  async delete(id) {
    let ship = await dbContext.Ships.findByIdAndDelete(id);
    return ship;
  }
}

export const shipsService = new ShipsService();
