import { NextResponse } from "next/server";
import { loginUser } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json(
        { error: "Username and password are required" },
        { status: 400 }
      );
    }

    const result = await loginUser(username, password);

    if (result.error) {
      return NextResponse.json({ error: result.error }, { status: 401 });
    }

    return NextResponse.json({ user: result.user });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "An error occurred during login" },
      { status: 500 }
    );
  }
}
