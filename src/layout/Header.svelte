<script>
  import { push } from "svelte-spa-router"
  import { fade } from 'svelte/transition'

  import Logo from "../components/Logo.svelte"

  let width
</script>

<header class="sticky">
  <div class="content" bind:clientWidth={width}>
    <div
    class="brand"
    on:click={_ => push("/")}>
      <Logo logo="3" size="medium"/>
      {#if width > 400}
        <div
        class="title"
        transition:fade>
          <h1>
            gui3's
          </h1>
          <h2>
            homepage
          </h2>
        </div>
      {/if}
    </div>

  </div>
</header>

<style>
  header {
    background: #0f5;
    background:
      linear-gradient(
        -10deg,
        #89a,
        #fff
      );
    
    position: relative;
    top: 0;
  }

  .sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
  }

  header .brand .title {
    display: inline-block;
    padding: 10px;
  }
  header .brand .title h1 {
    margin: 0;
  }
  header .brand .title h2 {
    margin: 0;
    font-style: italic;
    font-weight: normal;
  }
</style>