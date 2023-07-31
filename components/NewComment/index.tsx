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

type NewCommentProps = {
  onAddComment: Function;
};

const NewComment: React.FunctionComponent<NewCommentProps> = (props) => {
  const { onAddComment } = props;
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

    onAddComment({
      email: email,
      name: name,
      text: comment,
    });
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
