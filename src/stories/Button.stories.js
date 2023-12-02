import React from "react";
import Button from "../components/Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    color: {
      control: {
        type: "radio",
      },
      options: ["primary", "secondary"],
    },
    variant: {
      control: {
        type: "radio",
      },
      options: ["text", "contained", "outlined"],
    },
    size: {
      control: {
        type: "radio",
      },
      options: ["small", "medium", "large"],
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
  size: "medium",
  variant: "contained",
  onClick: () => alert("Primary Button clicked!"),
  children: "Submit",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
  size: "medium",
  variant: "contained",
  onClick: () => alert("Secondary Button clicked!"),
  children: "Submit",
};
