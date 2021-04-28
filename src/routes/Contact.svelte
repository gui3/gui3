<script>
  import GoogleDoc from '../components/GoogleDoc.svelte'

  //let link = 'https://docs.google.com/document/d/e/' +
  //  '2PACX-1vTCENk1Vk86jehVi57cWkoIOJAJ8OxogcdUYnGZFn86d7X8YZTvPqCjcRuwNP5pH7ykKOG4pMcgKwwM' +
  //  '/pub?embedded=true'

  let ref = '1jz8xz6yCjODH2kSyuye4jZcVDNWyrVC_rhLvYtF8qIk'

</script>

<style>
</style>

<article>
  <h1>Contact</h1>
  <p>
    Je suis actuellement à la recherche d'un emploi ou d'un stage
    en programmation ou développement Web.
    Si mon profil vous interpelle, n'hésitez pas à me contacter :
  </p>
  <ul>
    <li>
      ☎️ 06 32 81 86 87
    </li>
    <li>
      📧 gui.silvent@gmail.com
    </li>
  </ul>
</article>

<article>
  <h2>Curriculum</h2>
  <p>
    voici un aperçu de mon CV mis à jour en temps réel depuis Google Docs
  </p>
</article>

<GoogleDoc {ref}>
</GoogleDoc>
