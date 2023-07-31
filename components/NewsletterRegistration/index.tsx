import { ChangeEvent, FormEvent, FormEventHandler, useState } from "react";
import {
  NewsletterSection,
  InputContainer,
  InputField,
  Button,
} from "./styles";

const NewsletterRegistration = () => {
  const [email, setEmail] = useState<string>("");

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = async (
    event: FormEvent
  ) => {
    event.preventDefault();
    const response = await fetch("/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emailAddress: email,
      }),
    });

    const data = await response.json();
    console.log(data);
    setEmail("");
  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
  };

  return (
    <NewsletterSection>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={handleOnSubmit}>
        <InputContainer>
          <InputField
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            onChange={handleOnChange}
            value={email}
          />
          <Button>Register</Button>
        </InputContainer>
      </form>
    </NewsletterSection>
  );
};

export default NewsletterRegistration;
