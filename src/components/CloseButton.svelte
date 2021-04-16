<script>
  export let click = () => {}
</script>

<button
class="CloseButton"
on:click={click}>
  X
</button>

<style>
  .CloseButton {
    float: right;
    color: inherit;
  }
</style>