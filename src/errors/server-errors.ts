import { CustomError } from "./custom-error";

export class InternalServerError extends CustomError {
  status = 500;

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, InternalServerError.prototype);
  }
}

export class BadRequest extends CustomError {
  status = 400;

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, BadRequest.prototype);
  }
}

export class NotFound extends CustomError {
  status = 404;

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, NotFound.prototype);
  }
}