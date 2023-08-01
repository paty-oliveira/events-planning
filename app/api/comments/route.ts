import { NextRequest, NextResponse } from "next/server";

export type CommentsPayload = {
  content: string;
  author: string;
};

type GetCommentsResponse = {
  status: number;
  message: "Success" | "Failure";
  comments: CommentsPayload[];
};

export async function GET() {
  const comments: CommentsPayload[] = [
    {
      content: "My comment is amazing!",
      author: "Maximilian",
    },
    {
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
