
<script>
  import Script from "../components/Script.svelte"

  let src = "https://gui3.github.io/minigames-tictactoe/tictactoe.js"
  let container;

  function setupGame () {
    tictactoe.new(container, {
      showTerminal: false,
      frontColor: "inherit",
      backColor: "inherit"
    })
  }
</script>

<Script 
  {src} 
  libraryDetectionObject="tictactoe"
  on:loaded={setupGame}
/>

<div class="TicTacToe" bind:this={container}/>

<style>
  .TicTacToe {
    background: inherit !important;
    color: inherit !important;
    border-radius: 0 !important;
  }
</style>