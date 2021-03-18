
<script>
  import Script from "../components/Script.svelte"

  let src = "https://gui3.github.io/minigames-tictactoe/tictactoe.js"
  let container;

  function setupGame () {
    tictactoe.new(container, {
      showTerminal: false
    })
  }
</script>

<Script 
  {src} 
  libraryDetectionObject="tictactoe"
  on:loaded={setupGame}
/>

<div bind:this={container}/>