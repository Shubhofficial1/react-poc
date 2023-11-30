import React from "react";
import Link from "../components/Link";

export default {
  title: "Link",
  component: Link,
  argTypes: {
    href: {
      control: "text",
    },
  },
};

const Template = (args) => <Link {...args}>Home</Link>;
export const Default = Template.bind({});
Default.args = {
  href: "https://localhost:3000/home",
};
