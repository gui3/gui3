<script>
  import Router from "svelte-spa-router"
  import routes from "./routes"

  import Layout from "./layout/Layout.svelte"
</script>

<main>
  <Layout >
    <Router {routes} />
  </Layout>
</main>

<style>
  
</style>
