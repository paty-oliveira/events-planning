import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { emailAddress } = await request.json();
    return NextResponse.json({
      status: 201,
      message: "Success",
      email: emailAddress,
    });
  } catch (e) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
