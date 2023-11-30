import React from "react";
import Eyebrow from "../components/Eyebrow";

export default {
  title: "EyeBrow",
  component: Eyebrow,
  argTypes: {
    variant: {
      control: {
        type: "radio",
      },
      options: ["subtitle1", "subtitle2"],
    },
  },
};

const Template = (args) => <Eyebrow {...args}>Hello World</Eyebrow>;

export const Eyebrow1 = Template.bind({});
Eyebrow1.args = {
  variant: "subtitle1",
};

export const Eyebrow2 = Template.bind({});
Eyebrow2.args = {
  variant: "subtitle2",
};
