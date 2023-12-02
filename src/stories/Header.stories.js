import React from "react";
import Header from "../components/Header";

export default {
  title: "Header",
  component: Header,
  argTypes: {
    children: {
      type: {
        control: "text",
      },
    },
  },
};

const Template = (args) => <Header {...args} />;

export const Nav = Template.bind({});
Nav.args = {
  children: "Travo",
};
