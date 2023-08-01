import React, { useEffect, useState } from "react";
import { CommentsContainer, Comment } from "./styles";
import { CommentsPayload } from "@/app/api/comments/route";

const CommentList: React.FunctionComponent = () => {
  const [comments, setComments] = useState<CommentsPayload[]>([
    {
      content: "My comment is amazing!",
      author: "Maximilian",
    },
    {
      content: "Another comment ",
      author: "Patricia",
    },
  ]);

  useEffect(() => {
    async () => {
      const response = await fetch("/api/comments", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { comments } = await response.json();
      setComments(comments);
    };
  }, []);

  return (
    <CommentsContainer>
      {comments.map((comment, index) => (
        <Comment key={index}>
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
