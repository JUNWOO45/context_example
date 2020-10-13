import React from "react";

const Title = ({ lang }) => {
  const text = lang === "en" ? "TITLE~!" : "타이틀~!";
  return (
    <>
      <h1>{text}</h1>
    </>
  );
};

export default Title;
