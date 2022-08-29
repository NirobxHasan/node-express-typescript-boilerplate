export class GeneralError extends Error {
  constructor(message: string) {
    super();
    this.message = message;
  }
  getCode() {
    return 404;
  }
}

export class BadRequest extends GeneralError {
  constructor(message: string) {
    super(message);
    this.name = 'Bad Request';
  }
  getCode() {
    return 400;
  }
}

export class NotFound extends GeneralError {
  constructor(message: string) {
    super(message);
    this.name = 'Not Found';
  }
  getCode() {
    return 404;
  }
}
