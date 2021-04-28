<script>
  import breadcrumbs from "./breadcrumbs.js"
  import { location } from "svelte-spa-router"
  
  import Logo from "../components/Logo.svelte"
</script>

<nav class="Breadcrumbs opaque">
  {#each breadcrumbs as route}
    <a
    class="clickable nolink{$location.match(route.regex) ? " current" : ""}"
    href="#{route.path}">
      <Logo
      size="small"
      string={route.icon}/>
      <span class="bold screen_big">
        {route.name}
      </span>
    </a>
  {/each}
</nav>

<style>
  .Breadcrumbs {
    display: flex;
    flex-direction: row;
    -position: fixed;
    -top: 100px;
    -left: 0;
    -overflow: auto;
  }

  .Breadcrumbs * {
    margin: 5px 2px;
  }

  .current {
    -background: #222;
    -color: #fa0;
    border-bottom: 3px solid #f00
  }
</style>