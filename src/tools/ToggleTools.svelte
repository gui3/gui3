<script>
  import navbar_store from "../layout/navbarStore.js"

  import Logo from "../components/Logo.svelte"

  function toggleTools () {
    if ($navbar_store === "tools") {
      navbar_store.set("none")
    } else {
      navbar_store.set("tools")
    }
  }
</script>

<span
class="ToolToggle clickable"
name="ToolToggle"
on:click={toggleTools}>
  <Logo
  size="medium"
  string="{$navbar_store === "tools" ? "🛠️" : "🛠️"}"
  />
</span>

<style>
  .ToolToggle {
    display: block;
  }
</style>