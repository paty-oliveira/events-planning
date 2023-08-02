import { CommentsPayload } from "@/db/types";

export type GetCommentsRequest = {
  params: { eventId: string };
};

export type GetCommentsResponse = {
  status: number;
  message: "Success" | "Failure";
  comments: CommentsPayload[];
};
