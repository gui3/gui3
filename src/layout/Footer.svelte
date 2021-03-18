<script>
  import Logo from "../components/Logo.svelte"
</script>

<footer>
  <hr/>
  <div class="content">
    Site réalisé grâce à
  
    <br/>
    <Logo logo="svelte"/>
    <Logo logo="github"/>
    <Logo logo="node"/>
    <Logo logo="glitch"/>
  
    <br/>
    <a href="#/about">
      En savoir plus
    </a>
  </div>
</footer>

<style>
  footer {
    margin-top: 3em;
    padding: 1em;
    color: #444;

    text-align: center;
  }
  footer a {
    color: #444;
  }
</style>