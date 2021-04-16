<script>
  import {socket} from "../server/socket.js"
  import SocketLogs from "../server/SocketLogs.svelte"
  
  socket.onAny((ev, ...args) => console.log(ev, args))
  socket.emit("message", "coucou toi")
</script>

<h1>Hello world!</h1>

<SocketLogs />

<style>
</style>
