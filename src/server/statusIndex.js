
export default {
  "_unconnected": {
    name: "not_connected",
    color: "#444",
    description: "Not yet connected nor attempted"
  },
  "_blocked": {
    name: "blocked",
    color: "#000",
    description: "Connection blocked by CORS policy"
  },
  "connect": {
    name: "connect",
    color: "#0f0",
    description: "When the client successfully connects."
  },
  "connecting": {
    name: "connecting",
    color: "#00f",
    description: "When the client is in the process of connecting."
  },
  "disconnect": {
    name: "disconnect",
    color: "#444",
    description: "When the client is disconnected."
  },
  "connect_failed": {
    name: "connect_failed",
    color: "#f00",
    description: "When the connection to the server fails."
  },
  "error": {
    name: "error",
    color: "#f00",
    description: "An error event is sent from the server."
  },
  "message": {
    name: "message",
    color: "#0f0",
    description: "When the server sends a message using the send function."
  },
  "reconnect": {
    name: "reconnect",
    color: "#0f0",
    description: "When reconnection to the server is successful."
  },
  "reconnecting": {
    name: "reconnecting",
    color: "#00f",
    description: "When the client is in the process of connecting."
  },
  "reconnect_failed": {
    name: "reconnect_failed",
    color: "#f00",
    description: "When the reconnection attempt fails."
  }
}
