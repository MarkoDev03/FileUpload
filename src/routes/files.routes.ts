import { Router } from "express";
import { uploadFile } from "../controllers/files.controller";
import multer from "multer";
import { sotrageOptions } from "../config/multer";

const routes = Router();
const upload = multer();

routes.route("/upload").post(upload.single("file"), uploadFile)

export default routes;