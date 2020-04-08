import express from "express";
import BaseController from "../utils/BaseController";
import { shipClassService } from "../services/ShipClassService";
import { BadRequest } from "../utils/Errors";

export class ShipClassController extends BaseController {
  constructor() {
    super("api/shipclasses");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .put("/:id", this.edit)
      .post("", this.create)
      .delete("/:id", this.delete);
  }
  async getAll(req, res, next) {
    try {
      let shipClasses = await shipClassService.getAll();
      res.send(shipClasses);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let shipClass = await shipClassService.getById(req.params.id);
      if (!shipClass) {
        throw new BadRequest("Invalid Class ID");
      }
      res.send(shipClass);
    } catch (error) {
      next(error);
    }
  }
  async edit(req, res, next) {
    try {
      let shipClass = await shipClassService.edit(req.params.id, req.body);
      res.send(shipClass);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let shipClass = await shipClassService.create(req.body);
      res.send(shipClass);
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      let shipClass = await shipClassService.delete(req.params.id);
      res.send(shipClass);
    } catch (error) {
      next(error);
    }
  }
}
