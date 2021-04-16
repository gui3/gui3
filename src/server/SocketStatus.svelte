<script>
  import { fade } from 'svelte/transition'

  import { socket, socket_store } from "./socket.js"

  socket.connect()
</script>

<span
class="SocketStatus"
title={"socket status : " + $socket_store.status.name}>
  <div
  class="statusLed"
  style="background:{$socket_store.status.color};box-shadow: 0 0 10px {$socket_store.status.color}"
  />
  <div>
    Socket
  </div>
  <!--div
  class="screen_medium"
  transition:fade>
    {$socket_store.status.name}
  </div-->
</span>

<style>
  .SocketStatus {
    text-align: center;
    display: inline-block;
    color: inherit;
    text-decoration: none;
    padding: 10px;
  }
  .SocketStatus .statusLed {
    width: 15px;
    height: 15px;
    border-radius: 20px;
    border: 2px solid #000;
    -display: inline-block;
    margin: auto;
  }
</style>

