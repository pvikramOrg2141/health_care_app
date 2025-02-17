import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { sign } from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"

export async function POST(request) {
  try {
    const body = await request.json()
    const { email, password } = body

    // Here you would validate credentials against your database
    // This is just a mock implementation
    if (email === "test@example.com" && password === "password") {
      const token = sign({ email }, JWT_SECRET, { expiresIn: "1d" })

      // Set HTTP-only cookie
      cookies().set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24, // 1 day
      })

      return NextResponse.json({ success: true })
    }

    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
