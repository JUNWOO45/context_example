import React from "react";
import LangContext from "./LangContext";

const Title = () => {
  return (
    <LangContext.Consumer>
      {(lang) => {
        const text = lang === "en" ? "TITLE~!" : "타이틀~!";

        return <h1>{text}</h1>;
      }}
    </LangContext.Consumer>
  );
};

export default Title;
