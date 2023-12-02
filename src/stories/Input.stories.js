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
    style: {
      control: null,
    },
  },
};

const Template = (args) => <Input {...args} />;
export const Username = Template.bind({});
Username.args = {
  label: "Username",
  value: "",
  size: "large",
  style: {
    backgroundColor: "#0E1A2A",
    color: "#fff",
    borderRadius: "5px",
    width: "300px",
    marginBottom: "10px",
    "& input": { color: "#fff" },
    "& label": { color: "#fff" },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "transparent",
      },
      "&:hover fieldset": {
        borderColor: "transparent",
      },
      "&.Mui-focused fieldset": {
        borderColor: "transparent",
        boxShadow: "none",
      },
    },
  },
  onChange: action("username changed"),
};

export const Password = Template.bind({});
Password.args = {
  label: "Password",
  value: "",
  size: "large",
  style: {
    backgroundColor: "#0E1A2A",
    color: "#fff",
    borderRadius: "5px",
    width: "300px",
    marginBottom: "10px",
    "& input": { color: "#fff" },
    "& label": { color: "#fff" },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "transparent",
      },
      "&:hover fieldset": {
        borderColor: "transparent",
      },
      "&.Mui-focused fieldset": {
        borderColor: "transparent",
        boxShadow: "none",
      },
    },
  },
  onChange: action("password changed"),
};
