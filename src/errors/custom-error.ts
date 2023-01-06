import { IErrorModel } from "../models/error-model";
import { v4 } from "uuid";

export abstract class CustomError extends Error {
  status: number;

  constructor(message: string) {
    super(message);
  }

  serializeError(): IErrorModel[] {
    return [{
      message: this.message,
      status: this.status,
      name: this.name,
      traceId: v4()
    }]
  }
}