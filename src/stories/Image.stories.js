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
  },
};

const Template = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  alt: "Scenery",
};
