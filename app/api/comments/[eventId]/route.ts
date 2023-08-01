import { NextRequest, NextResponse } from "next/server";
import { CommentsPayload, GetCommentsResponse } from "../../types";

const comments: CommentsPayload[] = [
  {
    eventId: "e1",
    id: Math.random().toString(),
    content: "My comment is amazing!",
    author: "Maximilian",
  },
  {
    eventId: "e1",
    id: Math.random().toString(),
    content: "Another comment ",
    author: "Patricia",
  },
  {
    eventId: "e2",
    id: Math.random().toString(),
    content: "My comment is amazing!",
    author: "Maximilian",
  },
  {
    eventId: "e2",
    id: Math.random().toString(),
    content: "Another comment ",
    author: "Patricia",
  },
  {
    eventId: "e3",
    id: Math.random().toString(),
    content: "My comment is amazing!",
    author: "Maximilian",
  },
  {
    eventId: "e3",
    id: Math.random().toString(),
    content: "Another comment ",
    author: "Patricia",
  },
];

export async function GET(request: NextRequest, { params }: any) {
  const eventId = params.eventId;

  const filteredComments = comments.filter(
    (comment) => comment.eventId === eventId
  );

  return NextResponse.json<GetCommentsResponse>({
    status: 200,
    message: "Success",
    comments: filteredComments,
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
