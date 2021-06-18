<script>
  import { createEventDispatcher } from "svelte";
  import FullscreenIcon from "../assets/fullscreenIcon.svelte";

  let isFullscreen = false;
  const dispatch = createEventDispatcher();

  const fullscreen = () => {
    if (isFullscreen) {
      document.exitFullscreen();
      isFullscreen = false;
    } else {
      document.documentElement.requestFullscreen();
      isFullscreen = true;
    }
  };

  const handleResize = () => {
    isFullscreen =
      (screen.availHeight || screen.height - 30) <= window.innerHeight;
  };
</script>

<svelte:window on:resize={handleResize} />

<div id="toolbar">
  <button on:click={() => dispatch("save")}>Shrani</button>
  <button on:click={fullscreen}>
    <FullscreenIcon bind:isFullscreen />
  </button>
</div>

<style lang="scss">
  #toolbar {
    grid-area: toolbar;
    padding: 0.4rem 0.4rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 1rem;
    background: var(--grey-2);

    button {
      cursor: pointer;
      border: 0;
      padding: 0.2rem 0.4rem;
      margin-left: 0.4rem;
      border-radius: 0.2rem;
      background: var(--grey-3);
      color: rgb(197, 197, 197);
      font-weight: bold;

      &:hover {
        filter: brightness(1.1);
      }
    }
  }
</style>
