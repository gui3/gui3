<script>
  //import {location} from 'svelte-spa-router'

  import Css from "../head/Css.svelte"
  import Header from "./Header.svelte"
  import Footer from "./Footer.svelte"
  
</script>

<svelte:head>
  <Css/>
</svelte:head>

<Header />
<section class="content">
  <slot/>
</section>
<Footer />