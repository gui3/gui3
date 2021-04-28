<script>
  import Card from "../components/Card.svelte"

  //import TicTacToe from "./TicTacToe.svelte"
  //import Suffizante from "./Suffizante.svelte"

  import projects from "./_projects.js"
</script>

<article>
  <h1>
    Mes Projets perso
  </h1>
  <p>
    Vous trouverez ici une liste non exhaustive de projets
    que j'ai réalisé, certains finalisés, d'autres en cours,
    afin de m'entrainer et de montrer mes capacités en développement.
  </p>
</article>

{#each projects as proj}
  <Card>
    <svelte:component this={proj.svelteElement} />
  </Card>
{/each}