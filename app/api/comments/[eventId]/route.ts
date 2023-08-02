import { NextRequest, NextResponse } from "next/server";
import {
  GetCommentsRequestParams,
  GetCommentsResponse,
  PostCommentResponse,
  ResponseError,
} from "./types";
import { comments } from "@/db/comments";

export async function GET(
  request: NextRequest,
  { params }: GetCommentsRequestParams
) {
  const eventId = params.eventId;
  try {
    const filteredComments = comments.filter(
      (comment) => comment.eventId === eventId
    );

    return NextResponse.json<GetCommentsResponse>({
      status: 200,
      message: "Success",
      comments: filteredComments,
    });
  } catch (e: any) {
    return NextResponse.json<ResponseError>({
      status: 500,
      message: "Failure",
      error: e,
    });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    return NextResponse.json<PostCommentResponse>({
      status: 201,
      message: "Success",
      comment: body,
    });
  } catch (e: any) {
    return NextResponse.json<ResponseError>({
      status: 500,
      message: "Failure",
      error: e,
    });
  }
}
