import React from "react";
import Typography from "../components/Typography";

export default {
  title: "Typography",
  component: Typography,
  argTypes: {
    variant: {
      control: {
        type: "radio",
      },
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "subtitle1",
        "subtitle2",
        "body1",
        "body2",
        "caption",
        "overline",
      ],
    },
  },
};

const Template = (args) => <Typography {...args}>Sample text</Typography>;

export const Heading1 = Template.bind({});
Heading1.args = {
  variant: "h1",
};

export const Heading2 = Template.bind({});
Heading1.args = {
  variant: "h2",
};
