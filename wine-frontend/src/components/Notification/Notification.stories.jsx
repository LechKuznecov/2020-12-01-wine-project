import { storiesOf } from "@storybook/react";
import React from "react";
import Notification from "./Notification";
import theme from "../../theme";
import { ThemeProvider } from "styled-components";

storiesOf("Notification", module)
  .add("Error", () => (
    <ThemeProvider theme={theme}>
      <Notification handleChange={() => console.log("Clicked!")} color="error">
        Error message
      </Notification>
    </ThemeProvider>
  ))
  .add("Success", () => (
    <ThemeProvider theme={theme}>
      <Notification
        handleChange={() => console.log("Clicked!")}
        color="success"
      >
        Success message
      </Notification>
    </ThemeProvider>
  ));
