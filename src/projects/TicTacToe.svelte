
<script>
  import Script from "../components/Script.svelte"

  let src = "https://gui3.github.io/minigames-tictactoe/tictactoe.js"
  let container;

  function setupGame () {
    tictactoe.new(container, {
      showTerminal: false,
      frontColor: "inherit",
      backColor: "inherit",
      cellWidth: "50px",
      cellHeight: "50px",
      fontSize: "30px",
      width: "200px",
      gameHeight: "200px"
    })
  }
</script>

<Script 
  {src} 
  libraryDetectionObject="tictactoe"
  on:loaded={setupGame}
/>

<h2>le Morpion</h2>

<p>
  Voici un petit jeu codé entièrement dans un seul fichier javascript.
  <br/>
  L'IA est entièrement faite à la main (pas de copier-coller),
  elle n'est pas imbattable mais elle se défend plutôt bien !
  <br/>
  <br/>
  <a href="https://github.com/gui3/minigames-tictactoe/blob/main/tictactoe.js">
    Retrouvez le code source ici
  </a>
</p>

<div class="TicTacToe" bind:this={container}/>

<style>
</style>