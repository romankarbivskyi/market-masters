export class ApiError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);

    this.statusCode = statusCode;
  }

  static BadRequest(message: string) {
    return new ApiError(400, message);
  }
}
