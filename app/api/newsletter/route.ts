import { NextRequest, NextResponse } from "next/server";
import { PostNewsletterResponse } from "../types";
import { ResponseError } from "../types";

export async function POST(request: NextRequest) {
  try {
    const { emailAddress } = await request.json();
    return NextResponse.json<PostNewsletterResponse>({
      status: 201,
      message: "Success",
      email: emailAddress,
    });
  } catch (e: any) {
    return NextResponse.json<ResponseError>({
      status: 500,
      message: "Failure",
      error: e,
    });
  }
}
