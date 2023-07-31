import React from "react";
import { CommentsContainer, Comment } from "./styles";

const CommentList: React.FunctionComponent = () => {
  return (
    <CommentsContainer>
      <Comment>
        <p>My Comment is amazing!</p>
        <div>
          By <address>Maximilian</address>
        </div>
      </Comment>
      <Comment>
        <p>My Comment is amazing!</p>
        <div>
          By <address>Maximilian</address>
        </div>
      </Comment>
    </CommentsContainer>
  );
};

export default CommentList;
