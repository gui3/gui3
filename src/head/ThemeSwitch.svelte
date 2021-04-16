<script>
  import theme_store from "./theme_store.js"

  import Logo from "../components/Logo.svelte"

  $: theme = $theme_store

  function switchTheme () {
    theme_store.set(theme === "light" ? "dark" : "light")
  }
</script>

<span
class="ThemeSwitch clickable"
name="ThemeSwitch"
on:click={switchTheme}>
  <Logo
  size="medium"
  string="{$theme_store === "light" ? "🌘" : "🌞"}"
  />
</span>

<style>
  .ThemeSwitch {
    display: block;
  }
</style>