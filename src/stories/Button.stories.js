import React from "react";
import Button from "../components/Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    color: {
      type: "select",
      options: ["primary", "secondary"],
    },
    size: {
      control: {
        type: "radio",
      },
      options: ["small", "medium"],
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Submit",
  color: "primary",
  size: "medium",
  onClick: () => alert("Primary Button clicked!"),
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Submit",
  color: "secondary",
  size: "medium",
  onClick: () => alert("Secondary Button clicked!"),
};
