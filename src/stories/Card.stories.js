import React from "react";
import Card from "../components/Card";

export default {
  title: "Card",
  component: Card,
  argTypes: {
    src: {
      control: "text",
    },
    alt: {
      control: "text",
    },
    headline: {
      control: "text",
    },
    body: {
      control: "text",
    },
    onClick: { action: "clicked" },
  },
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  alt: "Scenery",
  headline: "This is a test Headline",
  body: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
};
