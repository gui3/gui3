<script>
  import { fade } from 'svelte/transition'
  import { location } from "svelte-spa-router"

  import breadcrumbs from "../breadcrumbs/breadcrumbs.js"
  import navbar_store from "./navbarStore.js"

  import Logo from "../components/Logo.svelte"

  export let width = 0

  $: route = breadcrumbs.find(p => $location.match(p.regex))
  || {
    name: "Site"
  }

  function toggleNavbar () {
    if ($navbar_store !== "breadcrumbs") {
      navbar_store.set("breadcrumbs")
    }
    else {
      navbar_store.set("none")
    }
  }

</script>

<span
href="/#/"
on:click={toggleNavbar}
class="brand clickable nolink">

  <Logo logo="3" size="45px"/>

  {#if width > 400}
    <div
    class="title"
    transition:fade>
      <h1>
        <span class="green">g</span>ui<span class="green">3</span>'s
      </h1>
      <h2 class="">
        { route["name"] }
      </h2>
    </div>
  {/if}
</span>

<style>
  .brand {
    margin: 5px;
  }
  .brand .title {
    display: inline-block;
    -padding: 10px;
  }
  .brand .title h1 {
    margin: 0;
  }
  .brand .title h2 {
    margin: 0;
    font-style: italic;
    font-weight: normal;
  }

  .green {
    color: #082;
  }

</style>