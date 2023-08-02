import React, { useState, useEffect } from "react";
import NewComment from "../NewComment";
import CommentList from "../CommentList";
import { CommentsSection, Button } from "./styles";
import { CommentsProps, Comment } from "./types";
import { CommentsPayload } from "@/db/types";

const Comments: React.FunctionComponent<CommentsProps> = ({ eventId }) => {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<CommentsPayload[]>([]);

  useEffect(() => {
    async function getCommentsFromEvent(eventId: string) {
      const response = await fetch("/api/comments/" + eventId);
      const { comments } = await response.json();
      setComments(comments);
    }
    getCommentsFromEvent(eventId);
  }, [eventId]);

  const handleOnClick = () => {
    setShowComments((prevStatus) => !prevStatus);
  };

  return (
    <CommentsSection>
      <Button onClick={handleOnClick}>
        {showComments ? "Hide" : "Show"} Comments
      </Button>
      {showComments && <NewComment eventId={eventId} />}
      {showComments && <CommentList comments={comments} />}
    </CommentsSection>
  );
};

export default Comments;
