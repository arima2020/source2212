const config = {
  serverUrl:
    "http://ec2-15-207-14-175.ap-south-1.compute.amazonaws.com:8090/send/object-stream",
  eventSourceUrl:
    "http://ec2-15-207-14-175.ap-south-1.compute.amazonaws.com:8090/kafka-byte-stream",
  socket: {
    url: "http://ec2-3-87-231-8.compute-1.amazonaws.com:8080/websocket-example",
    senderTopic: "/app/image/mobile/producer",
    receiverTopic: "/topic/consume/image",
  },
  annotations: [
    {
      tool: "Pencil",
      fields: ["height", "width", "left", "top", "path"],
    },
    {
      tool: "Line",
      fields: ["height", "width", "left", "top", "x1", "x2", "y1", "y2"],
    },
    {
      tool: "Rectangle",
      fields: ["height", "width", "left", "top"],
    },
    {
      tool: "Circle",
      fields: ["height", "width", "left", "top", "radius", "angle"],
    },
  ],
  payload: { IMAGE: "IMAGE", ANNOTATION: "ANNOTATION" },
  PEER_CONFIG: {
    iceServers: [
      {
        urls: "stun:ec2-18-221-102-19.us-east-2.compute.amazonaws.com:3478",
        username: "arimaglobal",
        credential: "arimaglobal",
      },
      {
        urls: "turn:ec2-18-221-102-19.us-east-2.compute.amazonaws.com:3478",
        username: "arimaglobal",
        credential: "arimaglobal",
      },
    ],
  },
  SIGNALING_SERVER: "http://ec2-user@ec2-18-225-10-187.us-east-2.compute.amazonaws.com:3001/",
  SOCKET_TOPICS: {
    JOIN_ROOM: "JOIN_ROOM",
    REMOTE_USER: "REMOTE_USER",
    REMOTE_USER_JOINED: "REMOTE_USER_JOINED",
    OFFER: "OFFER",
    ANSWER: "ANSWER",
    ICE_CANDIDATE: "ICE_CANDIDATE",
  },
};

export default config;
