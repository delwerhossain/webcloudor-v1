import { NextResponse } from 'next/server'

export async function GET() {
  return new NextResponse('XML feed temporarily disabled', { status: 503 })
}