import { storiesOf } from "@storybook/react";
import React from "react";
import StoryRouter from "storybook-react-router";
import Header from "./Header";

storiesOf("Header", module)
  .addDecorator(StoryRouter())
  .add("Header", () => <Header />);
