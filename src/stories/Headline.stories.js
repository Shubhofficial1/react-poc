import React from "react";
import Headline from "../components/Headline";

export default {
  title: "Headline",
  component: Headline,
  argTypes: {
    variant: {
      control: {
        type: "radio",
      },
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
    text: {
      control: "text",
    },
  },
};

const Template = (args) => <Headline {...args} />;
export const Default = Template.bind({});
Default.args = {
  variant: "h1",
  text: "This is sample headline",
};
