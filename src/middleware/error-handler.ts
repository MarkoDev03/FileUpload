import { Response, Request, NextFunction } from "express";
import Logger from "../config/logger";
import { CustomError } from "../errors/custom-error";
import { Constants } from "../common/constants";

export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction): void => {
  Logger.error(error);

  if (error instanceof(CustomError)) {
      var formetedError = error as CustomError;

      res.status(formetedError.status).json({ errors: formetedError.serializeError() });
  }

  res.status(500).json({ errors: [{ status: 500, message: Constants.InternalServerError }] });
}