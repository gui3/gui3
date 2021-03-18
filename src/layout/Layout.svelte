<script>
  import {location} from 'svelte-spa-router'

  import Header from "./Header.svelte"
  import Footer from "./Footer.svelte"

  console.log($location)
  
</script>

<Header />
<section class="content">
  <slot/>
</section>
<Footer />