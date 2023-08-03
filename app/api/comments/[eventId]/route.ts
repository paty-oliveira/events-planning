import { NextRequest, NextResponse } from "next/server";
import {
  RequestParams,
  GetCommentsResponse,
  PostCommentResponse,
} from "../../types";
import { ResponseError } from "../../types";
import { comments } from "@/db/comments";
import { CommentsPayload } from "@/db/types";

const uuid = () => Math.floor(Math.random() * 10000).toString();

export async function GET(request: NextRequest, { params }: RequestParams) {
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

export async function POST(request: NextRequest, { params }: RequestParams) {
  const eventId = params.eventId;
  try {
    const { name, text } = await request.json();
    const newComment: CommentsPayload = {
      eventId: eventId,
      id: uuid(),
      content: text,
      author: name,
    };
    comments.push(newComment);
    return NextResponse.json<PostCommentResponse>({
      status: 201,
      message: "Success",
      comment: newComment,
    });
  } catch (e: any) {
    return NextResponse.json<ResponseError>({
      status: 500,
      message: "Failure",
      error: e,
    });
  }
}
