export type CommentsPayload = {
  id: string;
  content: string;
  author: string;
};

export type GetCommentsResponse = {
  status: number;
  message: "Success" | "Failure";
  comments: CommentsPayload[];
};
