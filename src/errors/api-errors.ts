import { CustomError } from "./custom-error";

export class APIError extends CustomError {
   constructor(message: string, code: number) {
     super(message);

     this.status = code;
     Object.setPrototypeOf(this, APIError.prototype);
   }
}