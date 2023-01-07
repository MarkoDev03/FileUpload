import { Request, Response, NextFunction } from "express";
import { APIError } from "../errors/api-errors";
import { BadRequest } from "../errors/server-errors";
import { Constants } from "../common/constants";
import fs from "fs";
import path from "path";

export const uploadFile = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {

    if (!req.file) {
      throw new BadRequest(Constants.NoFileSpecified);
    }

    const filesPath = path.resolve("files");

    const stream = fs.openSync(`${filesPath}/${req.file.originalname}`, 'wx');
    fs.writeFileSync(stream, req.file.buffer)

  } catch (error) {
    next(new APIError(error?.message, error?.status));
  }
}