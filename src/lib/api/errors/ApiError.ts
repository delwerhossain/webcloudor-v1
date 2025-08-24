export class ApiError extends Error {
  public statusCode: number
  public isOperational: boolean

  constructor(statusCode: number, message: string, isOperational: boolean = true, stack?: string) {
    super(message)
    
    this.statusCode = statusCode
    this.isOperational = isOperational
    
    if (stack) {
      this.stack = stack
    } else {
      Error.captureStackTrace(this, this.constructor)
    }
  }

  static badRequest(message: string = 'Bad Request') {
    return new ApiError(400, message)
  }

  static unauthorized(message: string = 'Unauthorized') {
    return new ApiError(401, message)
  }

  static forbidden(message: string = 'Forbidden') {
    return new ApiError(403, message)
  }

  static notFound(message: string = 'Not Found') {
    return new ApiError(404, message)
  }

  static conflict(message: string = 'Conflict') {
    return new ApiError(409, message)
  }

  static tooManyRequests(message: string = 'Too Many Requests') {
    return new ApiError(429, message)
  }

  static internalServerError(message: string = 'Internal Server Error') {
    return new ApiError(500, message)
  }
}