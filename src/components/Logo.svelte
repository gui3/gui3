<script>
  export let logo = ""
  export let size = "small"
  export let style = ""

  const height = {
    "small": "20px",
    "medium": "40px",
    "big": "80px"
  }[size] || size
</script>

<img
src="./img/logos/{logo}.png"
alt="{logo} logo"
{style}
{height}/>
