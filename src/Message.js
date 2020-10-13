import React, { Component } from "react";
import LangContext from "./LangContext";

class Message extends Component {
  static contextType = LangContext;

  render() {
    const lang = this.context;

    if (lang === "en") {
      return <p>asfasdfadfadsfadsfadsf123</p>;
    } else {
      return <p>뮴ㄴㅇㄹㅁㅇㄹㅁㅇㄴㄹㅁㅇㄴㄹ44</p>;
    }
  }
}

export default Message;
