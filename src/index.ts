import { createServer } from "http";
import app from "./config/express";
import eventEmitter from "events";
import { Enviroment } from "./config/vars";
import Logger from "./config/logger";
 
const server = createServer(app);
const port = Enviroment.PORT || 5000;

server.setMaxListeners(Infinity);
eventEmitter.setMaxListeners(Infinity);

server.listen(port, () => {
  Logger.info(`Server is listening on port ${port}`);
})