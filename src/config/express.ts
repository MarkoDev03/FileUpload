import express from "express";
import helmet from "helmet";
import compression from "compression";
import methodOverride from "method-override";
import morgan from "morgan";
import hsts from "hsts";
import cors from "cors";
import routes from "../middleware";
import { errorHandler } from "../middleware/error-handler";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(compression());
app.use(methodOverride());
app.use(morgan("dev"));
app.use(hsts());
app.use(cors());
app.use("/api", routes);
app.use(errorHandler);

export default app;