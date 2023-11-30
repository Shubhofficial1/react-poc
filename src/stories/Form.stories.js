import React, { useState } from "react";
import Form from "../components/Form";

export default {
  title: "Form",
  component: Form,
  argTypes: {
    username: { control: "text" },
    password: { control: "text" },
    onNameChange: { action: "name Changed" },
    onPasswordChange: { action: "password Changed" },
    onSubmit: { action: "form Submitted" },
  },
};

const Template = (args) => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleNameChange = (e) => {
    setFormData({ ...formData, username: e.target.value });
    args.onNameChange(e);
  };

  const handlePasswordChange = (e) => {
    setFormData({ ...formData, password: e.target.value });
    args.onPasswordChange(e);
  };

  return (
    <Form
      {...args}
      username={formData.username}
      password={formData.password}
      onNameChange={handleNameChange}
      onPasswordChange={handlePasswordChange}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  username: "",
  password: "",
};
