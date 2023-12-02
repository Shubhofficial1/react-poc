import React from "react";
import Footer from "../components/Footer";
import Typography from "../components/Typography";

export default {
  title: "Footer",
  component: Footer,
  argTypes: {
    children: {
      type: {
        control: "text",
      },
    },
  },
};

const Template = (args) => <Footer {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <Typography variant={"caption"} style={{ color: "white" }}>
        &copy; 2020-23 All Rights Reserved 🚀
      </Typography>
    </>
  ),
};
