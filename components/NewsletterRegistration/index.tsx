import { FormEvent, FormEventHandler } from "react";
import {
  NewsletterSection,
  InputContainer,
  InputField,
  Button,
} from "./styles";

const NewsletterRegistration = () => {
  const registrationHandler: FormEventHandler<HTMLFormElement> = (
    event: FormEvent
  ) => {
    event.preventDefault();

    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API
  };

  return (
    <NewsletterSection>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <InputContainer>
          <InputField
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
          />
          <Button>Register</Button>
        </InputContainer>
      </form>
    </NewsletterSection>
  );
};

export default NewsletterRegistration;
