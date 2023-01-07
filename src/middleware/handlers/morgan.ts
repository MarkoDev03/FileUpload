import Logger from "../../config/logger";
import morgan, { StreamOptions } from "morgan";

const stream: StreamOptions = {
  write: (log) => Logger.http(log)
}
export const morganMiddleware = morgan(":method :url :status :res[content-length] - :response-time ms ", { stream });
