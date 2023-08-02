import { CommentsPayload } from "@/db/types";

export type RequestParams = {
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

export type PostNewsletterResponse = {
  status: number;
  message: "Success";
  email: string;
};

export type ResponseError = {
  status: number;
  message: "Failure";
  error: string;
};
