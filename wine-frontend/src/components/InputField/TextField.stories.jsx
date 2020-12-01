import { storiesOf } from "@storybook/react";
import React from "react";
import TextField from "./InputField";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

storiesOf("Input", module).add("Text Field", ({ title }) => (
  <ThemeProvider theme={theme}>
    <TextField
      value="name"
      labelText="Name"
      placeholder="Name"
      handleChange={() => console.log("Hello")}
    />
  </ThemeProvider>
));
