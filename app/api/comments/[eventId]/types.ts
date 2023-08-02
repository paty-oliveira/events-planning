import { CommentsPayload } from "@/db/types";

export type GetCommentsRequestParams = {
  params: { eventId: string };
};

export type GetCommentsResponse = {
  status: number;
  message: "Success" | "Failure";
  comments: CommentsPayload[];
};

export type PostCommentResponse = {
  status: number;
  message: "Success";
  comment: CommentsPayload;
};

export type ResponseError = {
  status: number;
  message: "Failure";
  error: string;
};
