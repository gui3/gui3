<script>
  import Logo from "../components/Logo.svelte"
</script>

<footer>
  <div class="content">
    <hr class="negative"/>
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
    color: #777;

    text-align: center;
  }
  footer a {
    color: #777;
  }
  footer hr {
    background: #777;
    height: 1px;
  }
</style>