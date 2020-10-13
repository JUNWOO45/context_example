import React, { useState } from "react";
import Button from "./Button";
import Title from "./Title";
import Message from "./Message";

function App() {
  const [lang, setLang] = useState("en");

  const toggleLang = () => {
    return lang === "en" ? setLang("kr") : setLang("en");
  };

  return (
    <>
      <Button lang={lang} toggleLang={toggleLang} />
      <Title lang={lang} />
      <Message lang={lang} />
    </>
  );
}

export default App;
