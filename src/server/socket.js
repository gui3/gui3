import io from "socket.io-client"

var socket = io("https://gui3-server.glitch.me/", {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd"
  },
  autoConnect: true
})

export default socket