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
      ],
    },
  },
};

const Template = (args) => <Typography {...args}>Sample text </Typography>;

export const Headline = Template.bind({});
Headline.args = {
  variant: "h2",
};

export const Body = Template.bind({});
Body.args = {
  variant: "body1",
};

export const Eyebrow = Template.bind({});
Eyebrow.args = {
  variant: "subtitle1",
};
