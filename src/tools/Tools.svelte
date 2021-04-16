<script>
  import Logo from "../components/Logo.svelte"
  import ThemeSwitch from "../head/ThemeSwitch.svelte"

  import Tool from "../components/Tool.svelte"
</script>

<nav class="Tools opaque">
  <Tool>
    <ThemeSwitch />
  </Tool>
</nav>

<style>
  .Tools {
    display: flex;
    flex-direction: row;
    -position: fixed;
    -top: 100px;
    -left: 0;
    -overflow: auto;
  }

</style>