import io from "socket.io-client"
import { readable, writable } from "svelte/store"

import statusIndex from "./statusIndex.js"


const socket_store = readable(
  {
    status: statusIndex["_unconnected"],
    logs: []
  },
  function start (set) {
    let lastEvent = "_unconnected"
    const logs = []
    
    function listener (evt, ...args) {
      lastEvent = evt

      logs.push({
        evt,
        args,
        date: new Date()
      })

      let temporary = false

      const status = statusIndex[evt] && evt !== "message"
      ? statusIndex[evt]
      : temporary = true && {
          name: evt,
          color: "#fc0",
          description: args.join(",")
        }

      set({status, logs})

      if (temporary) {
        setTimeout(_ => 
          {
            if (lastEvent === evt) {
              set(
                {
                  status: statusIndex["connect"],
                  logs
                }
              )
            }
          },
          1000
        )
      }
    }

    socket.onAny(listener)

    return function stop () {
      socket.offAny(listener)
    }
  }
)

const socket = io("https://gui3-server.glitch.me/", {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd"
  },
  autoConnect: false,
  reconnection: false
})

export {
  socket,
  socket_store
}

