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
    location: {
      control: "text",
    },
    onClick: { action: "clicked" },
  },
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "https://images.pexels.com/photos/2739666/pexels-photo-2739666.jpeg?auto=compress&cs=tinysrgb&w=1200",
  alt: "Mystical Amazon Rainforest",
  headline: "Mystical Amazon Rainforest",
  location: "Africa",
  body: "Explore the wonders of the Amazon Rainforest, where lush green canopies shelter unparalleled biodiversity, and the river weaves tales of nature's untamed magic.Explore the wonders of the Amazon Rainforest, where lush green canopies shelter unparalleled biodiversity, and the river weaves tales of nature's untamed magic.Explore the wonders of the Amazon Rainforest, where lush green canopies shelter unparalleled biodiversity, and the river weaves tales of nature's untamed magic.",
};
