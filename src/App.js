import React, { useState } from "react";
import LangContext from "./LangContext";
import Button from "./Button";
import Title from "./Title";
import Message from "./Message";

function App() {
  const [lang, setLang] = useState("en");

  const toggleLang = () => {
    return lang === "en" ? setLang("kr") : setLang("en");
  };

  return (
    <LangContext.Provider value={lang}>
      <Button toggleLang={toggleLang} />
      <Title />
      <Message />
    </LangContext.Provider>
  );
}

export default App;
