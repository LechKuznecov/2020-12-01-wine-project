import { storiesOf } from "@storybook/react";
import React from "react";
import Section from "./Section";

storiesOf("Section", module)
  .add("Full-width section", () => (
    <Section background="rgb(238,238,238)" fullWidth={true}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
      officiis odit rerum doloribus? Perferendis id animi porro, cumque minima
      unde sequi? Doloribus illo explicabo voluptatibus cumque optio quas,
      tempore totam.
    </Section>
  ))
  .add("Fixed-width Section", () => (
    <Section background="rgb(238,238,238)" fullWidth={false}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
      officiis odit rerum doloribus? Perferendis id animi porro, cumque minima
      unde sequi? Doloribus illo explicabo voluptatibus cumque optio quas,
      tempore totam.
    </Section>
  ))
  .add("Transparent Section", () => (
    <Section fullWidth={false}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
      officiis odit rerum doloribus? Perferendis id animi porro, cumque minima
      unde sequi? Doloribus illo explicabo voluptatibus cumque optio quas,
      tempore totam.
    </Section>
  ));
