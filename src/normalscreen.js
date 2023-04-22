import React from "react";

const Normalscreen = ({ color, text }) => {
  return (
    <div
      style={{
        background: color,
        height: "100vh",
        width: "100%",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>{text}</h1>
    </div>
  );
};

export default Normalscreen;
