import express from "express";
import BaseController from "../utils/BaseController";
import { logsService } from "../services/LogsService";
import { BadRequest } from "../utils/Errors";

export class LogsController extends BaseController {
  constructor() {
    super("api/logs");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .put("/:id", this.edit)
      .post("", this.create)
      .delete("/:id", this.delete);
  }
  async getAll(req, res, next) {
    try {
      let logs = await logsService.getAll();
      res.send(logs);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let log = await logsService.getById(req.params.id);
      if (!log) {
        throw new BadRequest("Invalid Log ID");
      }
      res.send(log);
    } catch (error) {
      next(error);
    }
  }
  async edit(req, res, next) {
    try {
      let log = await logsService.edit(req.params.id, req.body);
      res.send(log);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let log = await logsService.create(req.body);
      res.send(log);
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      let log = await logsService.delete(req.params.id);
      res.send(log);
    } catch (error) {
      next(error);
    }
  }
}
