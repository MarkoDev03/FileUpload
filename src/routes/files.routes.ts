import { Router } from "express";
import { deleteFile, downloadFile, renameFile, updateFile, uploadFile } from "../controllers/files.controller";
import multer from "multer";

const routes = Router();
const upload = multer();

routes.route("/download").get(downloadFile);
routes.route("/upload").post(upload.single("file"), uploadFile);
routes.route("/update").put(upload.single("file"), updateFile);
routes.route("/rename").put(renameFile);
routes.route("/delete/:fileName").delete(deleteFile);

export default routes;