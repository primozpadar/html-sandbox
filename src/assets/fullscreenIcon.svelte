<script>
  export let isFullscreen = false;
</script>

{#if isFullscreen}
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    display="block"
    id="NormalScreen"
    ><path d="M7 2v5H2" /><path d="M17 2v5h5" /><path d="M2 17h5v5" /><path
      d="M22 17h-5v5"
    /></svg
  >
{:else}
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    display="block"
    ><path d="M2 7V2h5" /><path d="M22 7V2h-5" /><path d="M7 22H2v-5" /><path
      d="M17 22h5v-5"
    /></svg
  >
{/if}

<style>
  svg {
    height: 1rem;
    width: 1rem;
  }
</style>
