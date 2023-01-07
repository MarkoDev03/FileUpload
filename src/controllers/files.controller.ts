import { Request, Response, NextFunction } from "express";
import { APIError } from "../errors/api-errors";
import { BadRequest, NotFound } from "../errors/server-errors";
import { Constants } from "../common/constants";
import fs from "fs";
import path from "path";

export const uploadFile = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {

    if (!req.file) {
      throw new BadRequest(Constants.NoFileSpecified);
    }

    const filesPath = path.resolve("files");

    if (!fs.existsSync(filesPath)) {
      fs.mkdirSync(filesPath);
    }

    const filePath = path.join(filesPath, req.file.originalname)

    fs.writeFileSync(filePath, req.file.buffer, {
      flag: "wx"
    });

    res.status(200).json({ message: Constants.FileUploaded, name: req.file.originalname });
  } catch (error) {
    next(new APIError(error?.message, error?.status ?? 500));
  }
}


export const updateFile = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {

    if (!req.file) {
      throw new BadRequest(Constants.NoFileSpecified);
    }

    const filesPath = path.resolve("files");
    const filePath = path.join(filesPath, req.file.originalname);

    if (!fs.existsSync(filePath)) {
      throw new NotFound(Constants.FileNotFound);
    }

    fs.writeFileSync(filePath, req.file.buffer, { encoding: 'utf8', flag: 'w' });

    res.status(200).json({ message: Constants.FileUpdated, name: req.file.originalname });
  } catch (error) {
    next(new APIError(error?.message, error?.status ?? 500));
  }
}

export const downloadFile = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const fileName = req.query.fileName.toString();

    const filesPath = path.resolve("files");
    const filePath = path.join(filesPath, fileName);

    if (!fs.existsSync(filePath)) {
      throw new NotFound(Constants.FileNotFound);
    }

    res.status(200).sendFile(filePath);
  } catch (error) {
    next(new APIError(error?.message, error?.status ?? 500));
  }
}

export const renameFile = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { oldName, newName } = req.body;

    const filesPath = path.resolve("files");
    const oldPath = path.join(filesPath, oldName);

    if (!fs.existsSync(oldPath)) {
      throw new NotFound(Constants.FileNotFound);
    }

    const newPath = path.join(filesPath, newName);

    fs.renameSync(oldPath, newPath);

    res.status(200).json({ oldName, newName })
  } catch (error) {
    next(new APIError(error?.message, error?.status ?? 500));
  }
}

export const deleteFile = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const fileName = req.params.fileName;

    const filesPath = path.resolve("files");
    const filePath = path.join(filesPath, fileName);

    if (!fs.existsSync(filePath)) {
      throw new NotFound(Constants.FileNotFound);
    }

    fs.rmSync(filePath);

    res.status(200).json({ fileName })
  } catch (error) {
    next(new APIError(error?.message, error?.status ?? 500));
  }
}