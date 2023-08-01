import { NextRequest, NextResponse } from "next/server";
import { CommentsPayload, GetCommentsResponse } from "../types";

export async function GET() {
  const comments: CommentsPayload[] = [
    {
      id: Math.random().toString(),
      content: "My comment is amazing!",
      author: "Maximilian",
    },
    {
      id: Math.random().toString(),
      content: "Another comment ",
      author: "Patricia",
    },
  ];
  return NextResponse.json<GetCommentsResponse>({
    status: 200,
    message: "Success",
    comments: comments,
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    return NextResponse.json({
      status: 201,
      message: "Success",
      comment: body,
    });
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 500 });
  }
}
