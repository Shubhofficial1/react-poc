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

const Template = (args) => <Link {...args}>Read More</Link>;
export const Default = Template.bind({});
Default.args = {
  href: "http://localhost:3000/",
};
