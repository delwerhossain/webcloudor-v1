import { NextRequest, NextResponse } from 'next/server'
import { ApiError } from '../errors/ApiError'

type AsyncHandler = (
  req: NextRequest,
  context?: any
) => Promise<NextResponse>

export const asyncHandler = (handler: AsyncHandler) => {
  return async (req: NextRequest, context?: any): Promise<NextResponse> => {
    try {
      return await handler(req, context)
    } catch (error: any) {
      console.error('API Error:', error)

      // Handle ApiError instances
      if (error instanceof ApiError) {
        return NextResponse.json(
          {
            success: false,
            message: error.message,
            statusCode: error.statusCode,
            ...(process.env.NODE_ENV === 'development' && { stack: error.stack })
          },
          { status: error.statusCode }
        )
      }

      // Handle Zod validation errors
      if (error.name === 'ZodError') {
        const validationErrors = error.errors.map((err: any) => ({
          field: err.path.join('.'),
          message: err.message
        }))

        return NextResponse.json(
          {
            success: false,
            message: 'Validation error',
            errors: validationErrors,
            statusCode: 400
          },
          { status: 400 }
        )
      }

      // Handle Mongoose validation errors
      if (error.name === 'ValidationError') {
        const validationErrors = Object.values(error.errors).map((err: any) => ({
          field: err.path,
          message: err.message
        }))

        return NextResponse.json(
          {
            success: false,
            message: 'Validation error',
            errors: validationErrors,
            statusCode: 400
          },
          { status: 400 }
        )
      }

      // Handle MongoDB duplicate key error
      if (error.code === 11000) {
        const field = Object.keys(error.keyPattern)[0]
        return NextResponse.json(
          {
            success: false,
            message: `${field} already exists`,
            statusCode: 409
          },
          { status: 409 }
        )
      }

      // Handle JSON parsing errors
      if (error instanceof SyntaxError && error.message.includes('JSON')) {
        return NextResponse.json(
          {
            success: false,
            message: 'Invalid JSON format',
            statusCode: 400
          },
          { status: 400 }
        )
      }

      // Default server error
      return NextResponse.json(
        {
          success: false,
          message: process.env.NODE_ENV === 'production' 
            ? 'Internal server error' 
            : error.message || 'Something went wrong',
          statusCode: 500,
          ...(process.env.NODE_ENV === 'development' && { 
            stack: error.stack,
            details: error 
          })
        },
        { status: 500 }
      )
    }
  }
}