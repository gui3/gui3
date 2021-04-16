<script>
  export let logo = ""
  export let string = "?"
  export let size = "small"
  export let style = ""

  const height = {
    "small": "20px",
    "medium": "35px",
    "big": "80px"
  }[size] || size
</script>

{#if logo.length > 0}
  <img
  class="Logo"
  src="./img/logos/{logo}.png"
  alt="{logo} logo"
  {style}
  {height}/>
{:else}
  <span
  class="Logo"
  {height}
  style="font-size:{height};">
    {string}
  </span>
{/if}
