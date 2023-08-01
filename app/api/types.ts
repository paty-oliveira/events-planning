export type CommentsPayload = {
  content: string;
  author: string;
};

export type GetCommentsResponse = {
  status: number;
  message: "Success" | "Failure";
  comments: CommentsPayload[];
};
