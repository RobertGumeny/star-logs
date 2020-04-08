import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class ShipsService {
  async getAll(query = {}) {
    let ships = await dbContext.Ships.find(query).populate(
      "class",
      "name description"
    );
    return ships;
  }
  async getById(id) {
    let ship = await dbContext.Ships.findById(id);
    if (!ship) {
      throw new BadRequest("Invalid Id");
    }
    return ship;
  }
  async getByClass(className) {
    let ship = await dbContext.Ships.find(className);
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
