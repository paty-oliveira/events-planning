import { NextRequest, NextResponse } from "next/server";
import { GetCommentsRequest, GetCommentsResponse } from "./types";
import { comments } from "@/db/comments";

export async function GET(
  request: NextRequest,
  { params }: GetCommentsRequest
) {
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
    return NextResponse.json<GetCommentsResponse>({
      status: 201,
      message: "Success",
      comments: body,
    });
  } catch (e) {
    return NextResponse.json<GetCommentsResponse>({
      status: 500,
      message: "Failure",
      comments: [],
    });
  }
}
