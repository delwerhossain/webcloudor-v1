import { NextResponse } from 'next/server'

interface ApiResponseData {
  success: boolean
  message?: string
  data?: any
  statusCode: number
  timestamp: string
}

export class ApiResponse {
  static success(data?: any, statusCode: number = 200, message?: string) {
    const responseData: ApiResponseData = {
      success: true,
      statusCode,
      timestamp: new Date().toISOString(),
      ...(message && { message }),
      ...(data && { data })
    }

    return NextResponse.json(responseData, { status: statusCode })
  }

  static error(message: string, statusCode: number = 500, data?: any) {
    const responseData: ApiResponseData = {
      success: false,
      message,
      statusCode,
      timestamp: new Date().toISOString(),
      ...(data && { data })
    }

    return NextResponse.json(responseData, { status: statusCode })
  }

  static created(data?: any, message: string = 'Resource created successfully') {
    return this.success(data, 201, message)
  }

  static updated(data?: any, message: string = 'Resource updated successfully') {
    return this.success(data, 200, message)
  }

  static deleted(message: string = 'Resource deleted successfully') {
    return this.success(null, 200, message)
  }

  static notFound(message: string = 'Resource not found') {
    return this.error(message, 404)
  }

  static badRequest(message: string = 'Bad request') {
    return this.error(message, 400)
  }

  static unauthorized(message: string = 'Unauthorized') {
    return this.error(message, 401)
  }

  static forbidden(message: string = 'Forbidden') {
    return this.error(message, 403)
  }

  static conflict(message: string = 'Resource conflict') {
    return this.error(message, 409)
  }

  static tooManyRequests(message: string = 'Too many requests') {
    return this.error(message, 429)
  }

  static internalServerError(message: string = 'Internal server error') {
    return this.error(message, 500)
  }
}