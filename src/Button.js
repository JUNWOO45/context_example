import React from "react";

const Button = ({ lang, toggleLang }) => {
  return (
    <>
      <button onClick={toggleLang}>{lang}</button>
    </>
  );
};

export default Button;
