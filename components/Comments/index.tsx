import React, { useState } from 'react';
import NewComment from '../NewComment';
import CommentList from '../CommentList';
import { CommentsSection, Button } from './styles';

type CommentsProps = {
    eventId: string;
}

const Comments: React.FunctionComponent<CommentsProps> = ({ eventId }) => {

  const [showComments, setShowComments] = useState(false);

  const toggleCommentsHandler = () => {
    setShowComments((prevStatus) => !prevStatus);
  }

  const addCommentHandler = () => {
    // send data to API
  }

  return (
    <CommentsSection>
      <Button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </Button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList />}
    </CommentsSection>
  );
}

export default Comments;