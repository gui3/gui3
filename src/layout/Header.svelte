<script>
  import { slide } from 'svelte/transition'

  import Brand from "./Brand.svelte"
  import ToolBar from "./ToolBar.svelte"
  import CloseButton from "../components/CloseButton.svelte"
  import Breadcrumbs from "../breadcrumbs/Breadcrumbs.svelte"
  import Tools from "../tools/Tools.svelte"

  import navbar_store from "./navbarStore.js"

  let width

  function closeNavbar () {
    navbar_store.set("none")
  }
</script>

<header
class="sticky opaque">
  <div
  class="content"
  bind:clientWidth={width}>
    <div
    class="layout">
      <Brand {width}/>

      <ToolBar />
    </div>
    {#if $navbar_store !== "none"}
      <nav
      class="advancedNav"
      transition:slide>
        <hr class="negative little"/>
        <CloseButton click={closeNavbar}/>
        {#if $navbar_store === "breadcrumbs"}
          <Breadcrumbs />
        {:else if $navbar_store === "tools"}
          <Tools/>
        {:else}
          ❌ oops nothing to show here
        {/if}
      </nav>
    {/if}
    <hr class="negative big"/>
  </div>
</header>

<style>
  header {
    -background: #0f5;
    -background:
      linear-gradient(
        -10deg,
        #89a,
        #fff
      );
  }

  header .advancedNav {
    position: relative;
  }

  header hr.big{
    -background: #000;
    height: 3px;
  }
  header hr.little{
    -background: #000;
    height: 2px;
  }

  .sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
  }

  header .layout {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>