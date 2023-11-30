import React from "react";
import Input from "../components/Input";
import { action } from "@storybook/addon-actions";

export default {
  title: "Input",
  component: Input,
  argTypes: {
    label: { contol: "text" },
    value: { control: "text" },
    size: {
      control: {
        type: "radio",
      },
      options: ["small", "medium"],
    },
  },
};

const Template = (args) => <Input {...args} />;
export const Default = Template.bind({});
Default.args = {
  label: "Username",
  value: "",
  size: "small",
  onChange: action("changed"),
};
