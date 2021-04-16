<script>
  import SocketStatus from "../server/SocketStatus.svelte"
  import ToggleTools from "../tools/ToggleTools.svelte"

  import Tool from "../components/Tool.svelte"
</script>

<nav>
  <!--Tool-->
    <SocketStatus />
  <!--/Tool-->
  <Tool>
    <ToggleTools />
  </Tool>
</nav>

<style>
  nav {
    display: inline-block;
    padding: 10px 0;
    vertical-align: middle;
    display: flex;
    align-items: center;
  }
</style>