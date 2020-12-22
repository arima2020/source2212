import React, { useState, useEffect } from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

import config from "../config";

const stompClient = Stomp.over(new SockJS(config.socket.url, null, {}));

const withSocketStomp = (ParentComponent) => (props) => {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    stompClient.connect({}, () => {
      stompClient.subscribe(config.socket.receiverTopic, ({ body }) =>
        setMessage(body)
      );
    });
  });

  const sendData = (payload) => {
    if (stompClient.connected) {
      stompClient.send(
        config.socket.senderTopic,
        {},
        JSON.stringify({ type: "ANNOTATION", payload })
      );
    } else {
      throw new Error("Send error: Socket is disconnected");
    }
  };

  return (
    <ParentComponent
      isConnected={stompClient && stompClient.connected}
      sendData={sendData}
      message={message}
      {...props}
    />
  );
};

export default withSocketStomp;
