<script>
  import { socket, socket_store } from "./socket.js"
</script>

<article>
  <h2>Logs de la connection au serveur distant</h2>
  <code>
    <pre>{$socket_store.logs.map(l => JSON.stringify(l)).join("\n")}</pre>
  </code>
</article>