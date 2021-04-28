<script>
  export let ref

  let linkEmbed = 'https://docs.google.com/document/d/' +
    ref + '/pub?embedded=true'

  let linkPdf = 'https://docs.google.com/document/d/' +
    ref + '/export?format=pdf'

</script>

<style>
  .page {
    box-shadow: 4px 4px 5px #eb5;
    border: 1px solid #765;
    margin: 5%;
    max-width: 1000px;
    min-width: 800px;
  }
  .gDocContainer {
    position: relative;
    width: 90%;
    -min-width: 800px;
    padding-top: 142%;
  }
  .gDoc {
    overflow: visible;
    border: 0;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
</style>

<article id="options">
  <ul>
    <li>
      <a href={linkPdf}>
        🖨️ télécharger le document au format PDF
      </a>
    </li>
    <li>
      <a href={linkEmbed}>
        👀 voir le document en pleine page
      </a>
    </li>
  </ul>
  <p>
    <em>
      La visualisation suivante utilise un <strong>iframe</strong>,
      l'affichage peut ne pas être optimal :
    </em>
  </p>
</article>

<div class="gDocContainer page">
  <iframe
  id="gDoc"
  name="gDoc"
  class="gDoc"
  title="resume"
  src={linkEmbed}>
  </iframe>
</div>
