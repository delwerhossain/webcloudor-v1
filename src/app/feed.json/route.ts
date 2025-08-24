import { NextResponse } from 'next/server'

export async function GET() {
  return new NextResponse('JSON feed temporarily disabled', { status: 503 })
}