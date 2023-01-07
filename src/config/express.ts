import express from "express";
import helmet from "helmet";
import compression from "compression";
import methodOverride from "method-override";
import hsts from "hsts";
import cors from "cors";
import routes from "../middleware";
import { errorHandler } from "../middleware/handlers/error-handler";
import { notFoundHandler } from "../middleware/handlers/not-found";
import { morganMiddleware } from "../middleware/handlers/morgan";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(compression());
app.use(methodOverride());
app.use(morganMiddleware);
app.use(hsts());
app.use(cors());
app.use("/api", routes);
app.use("*", notFoundHandler);
app.use(errorHandler);

export default app;