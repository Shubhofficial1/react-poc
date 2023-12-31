import React from "react";

const Body = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "#111419",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
};

export default Body;
