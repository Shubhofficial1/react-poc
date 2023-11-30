import React from "react";
import Header from "../components/Header";

export default {
  title: "Header",
  component: Header,
  argTypes: {
    text: {
      type: {
        control: "text",
      },
    },
  },
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Logo",
};
