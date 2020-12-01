import React from "react";
import { Section, Heading, InputField, Button } from "../../components";
import * as S from "./Register.style";

function Register() {
  return (
    <Section>
      <Heading>Register</Heading>
      <form>
        <InputField
          type="text"
          labelText="Email"
          placeholder="Email"
          handlechange={() => console.log("yay")}
        />
        <InputField
          type="password"
          labelText="Password"
          placeholder="Password"
          handleChange={() => console.log("yay")}
        />
        <S.ButtonBlock>
          <Button type="submit">REGISTER</Button>
        </S.ButtonBlock>
      </form>
    </Section>
  );
}

export default Register;
