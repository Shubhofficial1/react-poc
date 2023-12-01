import React from "react";

const Body = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "#111419",
        color: "#333",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};

export default Body;
