import React from "react";
import { CommentsContainer, Comment } from "./styles";
import { CommentListProps } from "./types";

const CommentList: React.FunctionComponent<CommentListProps> = ({
  comments,
}) => {
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
