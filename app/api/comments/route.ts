import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ status: 200, message: "Success" });
}

export async function POST(request: NextRequest) {
  try {
    const { comment } = await request.json();
    return NextResponse.json({
      status: 201,
      message: "Success",
      comment: comment,
    });
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 500 });
  }
}
