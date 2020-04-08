import express from "express";
import BaseController from "../utils/BaseController";
import { ranksService } from "../services/RanksService";
import { BadRequest } from "../utils/Errors";

export class RanksController extends BaseController {
  constructor() {
    super("api/ranks");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .put("/:id", this.edit)
      .post("", this.create)
      .delete("/:id", this.delete);
  }
  async getAll(req, res, next) {
    try {
      let ranks = await ranksService.getAll();
      res.send(ranks);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let rank = await ranksService.getById(req.params.id);
      if (!rank) {
        throw new BadRequest("Invalid Rank ID");
      }
      res.send(rank);
    } catch (error) {
      next(error);
    }
  }
  async edit(req, res, next) {
    try {
      let rank = await ranksService.edit(req.params.id, req.body);
      res.send(rank);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let rank = await ranksService.create(req.body);
      res.send(rank);
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      let rank = await ranksService.delete(req.params.id);
      res.send(rank);
    } catch (error) {
      next(error);
    }
  }
}
