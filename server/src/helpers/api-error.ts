export class ApiError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);

    this.statusCode = statusCode;
  }

  static BadRequest(message: string) {
    return new ApiError(400, message);
  }

  static Unauthorized(message: string) {
    return new ApiError(401, message);
  }

  static Forbidden() {
    return new ApiError(403, "Forbidden");
  }
}
