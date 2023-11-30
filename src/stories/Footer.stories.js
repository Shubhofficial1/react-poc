import React from "react";
import Footer from "../components/Footer";

export default {
  title: "Footer",
  component: Footer,
  argTypes: {
    text: {
      type: {
        control: "text",
      },
    },
    variant: {
      control: {
        type: "radio",
      },
      options: ["subtitle1", "subtitle2", "body1", "body2", "caption"],
    },
  },
};

const Template = (args) => <Footer {...args} />;
export const Default = Template.bind({});

Default.args = {
  text: " 2020-2023. All rights reserved 🚀",
  variant: "subtitle1",
};
