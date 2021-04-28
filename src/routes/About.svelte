<script>
  import Logo from "../components/Logo.svelte"
  // import Card from "../components/Card.svelte"
</script>


<article>
  <h1 id="site">A propos du site</h1>
  <p>
    Ce site a été entièrement codé à l'ancienne,
    à la main et avec beaucoup d'amour !
  </p>

  <h3>Technologies utilisées</h3>
  <ul>
    <li>
      <h3><a href="https://svelte.com">
        <Logo
        logo="svelte"
        size="medium"/>
        Svelte & Sapper
      </a></h3>
      <p>
        Svelte est un framework frontend novateur
        fondé par Rich Harris
        et en développement depuis 2016.
      </p>
      <p>
        En complément de Svelte, le framework Sapper
        offre une solution pour créer rapidement
        des sites multi-pages complets.
      <p/>
      <p>
        J'ai été conquis par ses promesses qui sont:
        Server Side Rendering,
        rapidité d'exécution,
        templates facilement imbricables.
      </p>
    </li>
    <!--li>
      <h3><a href="https://heroku.com">
        <img
        src="images/logos/Heroku.png"
        alt="logo Heroku"
        style="height: 4em;"/>
        Heroku
      </a></h3>
      <p>
        Heroku est un hébergeur de programmes/sites
        qui a l'avantage d'offrir une solution très complête
        gratuitement, tant que les applications
        ne dépassent pas une certaine consommation de temps-machine
      <p/>
    </li-->
    <li>
      <h3><a href="https://github.com">
        <Logo
        logo="github"
        size="medium"/>
        Github
      </a></h3>
      <p>
        Inutile de présenter Github,
        la référence du versionnage en ligne.
        Sachez que j'utilise aussi Gitlab,
        qui a ses avantages et ses inconvénients.
      <p/>
    </li>
    <li>
      <h3><a href="https://nodejs.com">
        <Logo
        logo="node"
        size="medium"/>
        Node.js
      </a></h3>
      <p>
        Node, c'est le début d'un grand amour :
        utiliser javascript
        hors du web ou côté serveur.
        Personellement, je pense que c'est
        la meilleure chose qui nous soit arrivée
        depuis les pokémons.
      <p/>
    </li>
  </ul>
</article>

<article>
  <h1 id="me">A propos de moi</h1>
  <p>
    Forestier de formation,
    j'ai baigné dans la cartographie depuis mes débuts
    (
      <a href="https://qgis.org">Qgis</a>,
      <a href="https://esrifrance.fr">Arcgis</a>,
      <a href="https://oxygis.eu">Oxygis</a>
      ...
    )
    <br/>
    Un jour mon patron m'a dit : Guillaume,
    il faut que tu te mettes à la programmation, ça va te plaire
    (et j'en ai besoin pour traiter des bases de données...)
    <br/>
    Du coup je m'y suis mis,
    et j'ai pris le virus,
    tant et si bien qu'aujourd'hui j'essaie de faire un site internet
    sans utiliser le moindre CMS.
  </p>
  <p>
    C'est pas si compliqué,
    mais on perd vite du temps sur des choses passionnantes et inutiles,
    comme les pages d'erreurs, la traduction i18n, les styles ...
  </p>
  <p>
    Bref, tout ça pour dire que j'y suis pas encore. Mais on y arrive.
    Je vais bien trouver quoi dire ici...
    <br/><br/>
    En attendant, bon voyage!
  </p>
</article>