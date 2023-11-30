import React from "react";
import Body from "../components/Body";

export default {
  title: "Body",
  component: Body,
  argTypes: {},
};

const Template = (args) => (
  <Body {...args}>
    <p>This paragraph is inside body component</p>
  </Body>
);
export const Default = Template.bind({});

Default.args = {};
