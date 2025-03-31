import React from "react";

const Footer = ({ mode }) => {
  return (
    <div
      className={`bg-${mode} d-flex flex-column justify-content-center align-items-center gap-3`}
      style={{
        width: "100%",
        height: "20vh",
        color: mode === "light" ? "black" : "white",
      }}
    >
      <p className="d-flex flex-column justify-content-center align-items-center ">
        <b>Deepanvita Paliwal</b>
        <i className="fs-6">Bringing Digital ideas to Life</i>
      </p>
    </div>
  );
};

export default Footer;
