import React, { useEffect, useState } from "react";
import { CommentsContainer, Comment } from "./styles";
import { CommentsPayload } from "@/app/api/types";
import { CommentListProps } from "./types";

const CommentList: React.FunctionComponent<CommentListProps> = ({
  eventId,
}) => {
  const [comments, setComments] = useState<CommentsPayload[]>([]);

  useEffect(() => {
    async () => {
      const response = await fetch("/api/comments/" + eventId, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { comments } = await response.json();
      setComments(comments);
    };
  }, [eventId]);

  return (
    <CommentsContainer>
      {comments.map((comment) => (
        <Comment key={comment.id}>
          <p>{comment.content}</p>
          <div>
            By <address>{comment.author}</address>
          </div>
        </Comment>
      ))}
    </CommentsContainer>
  );
};

export default CommentList;
