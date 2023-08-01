import React, { useState } from "react";
import NewComment from "../NewComment";
import CommentList from "../CommentList";
import { CommentsSection, Button } from "./styles";

type CommentsProps = {
  eventId: string;
};

type Comment = {
  email: string;
  name: string;
  text: string;
};

const Comments: React.FunctionComponent<CommentsProps> = ({ eventId }) => {
  const [showComments, setShowComments] = useState(false);

  const toggleCommentsHandler = () => {
    setShowComments((prevStatus) => !prevStatus);
  };

  const addCommentHandler = async (comment: Comment) => {
    const response = await fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <CommentsSection>
      <Button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </Button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList />}
    </CommentsSection>
  );
};

export default Comments;
