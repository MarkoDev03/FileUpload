import { Router } from "express";
import files from "../routes/files.routes";

const routes = Router();

routes.use("/files", files);

export default routes;