import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Section,
  Heading,
  InputField,
  Button,
  Notification,
} from "../../components";
import * as S from "./Register.style";

function newUser(email, password, history, setNotification) {
  console.log(email);
  fetch(`http://localhost:8080/register`, {
    method: "Post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.msg === "User has been succesfully registered") {
        history.push("/login");
      } else {
        setNotification(data.msg);
      }
    })
    .catch((err) => console.log(err));
}

function Register() {
  const [notification, setNotification] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  return (
    <Section>
      <Heading>Register</Heading>
      {notification && (
        <Notification color="error">{notification}</Notification>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          newUser(email, password, history, setNotification);
        }}
      >
        <InputField
          type="email"
          labelText="Email"
          placeholder="Email"
          handleChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          type="password"
          labelText="Password"
          placeholder="Password"
          handleChange={(e) => setPassword(e.target.value)}
        />
        <S.ButtonBlock>
          <Button type="submit">REGISTER</Button>
        </S.ButtonBlock>
      </form>
    </Section>
  );
}

export default Register;
