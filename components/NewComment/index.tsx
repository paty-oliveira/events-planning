import React, {
  useState,
  FormEventHandler,
  FormEvent,
  ChangeEvent,
} from "react";
import {
  NewCommentForm,
  NewCommentRow,
  InputContainer,
  Button,
} from "./styles";
import { NewCommentProps } from "./types";
import { Comment } from "../Comments/types";

const postNewComment = async (comment: Comment, eventId: string) => {
  try {
    await fetch("/api/comments/" + eventId, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    });
  } catch (error) {
    console.log(error);
  }
};

const NewComment: React.FunctionComponent<NewCommentProps> = ({ eventId }) => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [comment, setComment] = useState<string>("");

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = (
    event: FormEvent
  ) => {
    event.preventDefault();

    if (
      !email ||
      email.trim() === "" ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !comment ||
      comment.trim() === ""
    ) {
      setIsInvalid(true);
      return;
    }

    postNewComment(
      {
        email: email,
        name: name,
        text: comment,
      },
      eventId
    );
  };

  return (
    <NewCommentForm onSubmit={handleOnSubmit}>
      <NewCommentRow>
        <InputContainer>
          <label htmlFor="email">Your email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
        </InputContainer>
      </NewCommentRow>
      <InputContainer>
        <label htmlFor="comment">Your comment</label>
        <textarea
          id="comment"
          rows={5}
          value={comment}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setComment(e.target.value)
          }
        ></textarea>
      </InputContainer>
      {isInvalid && <p>Please enter a valid email address and comment!</p>}
      <Button>Submit</Button>
    </NewCommentForm>
  );
};

export default NewComment;
