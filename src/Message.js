import React, { Component } from "react";

class Message extends Component {
  render() {
    const { lang } = this.props;

    if (lang === "en") {
      return <p>asfasdfadfadsfadsfadsf</p>;
    } else {
      return <p>뮴ㄴㅇㄹㅁㅇㄹㅁㅇㄴㄹㅁㅇㄴㄹ</p>;
    }
  }
}

export default Message;
