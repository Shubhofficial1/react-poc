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
      type: "select",
      options: ["small", "medium", "large"],
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
