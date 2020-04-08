import express from "express";
import BaseController from "../utils/BaseController";
import { shipsService } from "../services/ShipsService";
import { BadRequest } from "../utils/Errors";

export class ShipsController extends BaseController {
  constructor() {
    super("api/ships");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .get("", this.getByClass)
      .put("/:id", this.edit)
      .post("", this.create)
      .delete("/:id", this.delete);
  }
  async getAll(req, res, next) {
    try {
      if (req.query.className) {
        return next();
      }
      let ships = await shipsService.getAll();
      res.send(ships);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let ship = await shipsService.getById(req.params.id);
      if (!ship) {
        throw new BadRequest("Invalid Ship ID");
      }
      res.send(ship);
    } catch (error) {
      next(error);
    }
  }
  async getByClass(req, res, next) {
    try {
      let ship = await shipsService.getByClass(req.query.className);
      if (!ship) {
        throw new BadRequest("Invalid Ship Class");
      }
      res.send(ship);
    } catch (error) {
      next(error);
    }
  }
  async edit(req, res, next) {
    try {
      let ship = await shipsService.edit(req.params.id, req.body);
      res.send(ship);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let ship = await shipsService.create(req.body);
      res.send(ship);
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      let ship = await shipsService.delete(req.params.id);
      res.send(ship);
    } catch (error) {
      next(error);
    }
  }
}
