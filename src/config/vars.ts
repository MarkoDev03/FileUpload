import dotenv from "dotenv";
import { IEnviromentVariables } from "../models/vars";

dotenv.config();

const config = process.env;

export const Enviroment: IEnviromentVariables = {
  PORT: Number(config.PORT)
};