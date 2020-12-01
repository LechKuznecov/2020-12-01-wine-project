import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import {
  Section,
  Heading,
  InputField,
  Button,
  Notification,
} from "../../components";
import { AuthContext } from "../../context/AuthContext";
import * as S from "./Login.style";

function loginUser(email, password, history, setNotification, auth) {
  fetch(`http://localhost:8080/login`, {
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
      if (data.token) {
        auth.setToken(data.token);
        history.push("/");
      } else {
        return setNotification(data.msg || "Error");
      }
    })
    .catch((err) => setNotification(err.message));
}

function Login() {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const [notification, setNotification] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Section>
      <Heading>Login</Heading>
      {notification && (
        <Notification color="error" handleChange={() => setNotification(false)}>
          {notification}
        </Notification>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          loginUser(email, password, history, setNotification, auth);
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
          minLength="8"
          maxLength="64"
          placeholder="Password"
          handleChange={(e) => setPassword(e.target.value)}
        />
        <S.ButtonBlock>
          <Button type="submit">LOGIN</Button>
        </S.ButtonBlock>
      </form>
    </Section>
  );
}

export default Login;
