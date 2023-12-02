import React from "react";
import Image from "../components/Image";

export default {
  title: "Image",
  component: Image,
  argTypes: {
    src: {
      control: "text",
    },
    alt: {
      control: "text",
    },
    height: {
      control: "text",
    },
  },
};

const Template = (args) => <Image {...args} />;

export const Banner = Template.bind({});
Banner.args = {
  src: "https://images.pexels.com/photos/2707756/pexels-photo-2707756.jpeg?auto=compress&cs=tinysrgb&w=1200",
  alt: "Soothing Bali Beaches",
  height: "200px",
};
