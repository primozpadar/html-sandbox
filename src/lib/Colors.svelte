<script>
  import palettes from "nice-color-palettes/100.json";

  const randomPalette = () => {
    return palettes[Math.floor(Math.random() * palettes.length)];
  };

  let palette = randomPalette();
</script>

<div id="colors">
  <div class="colors">
    <div style={`background: ${palette[0]}`}>{palette[0]}</div>
    <div style={`background: ${palette[1]}`}>{palette[1]}</div>
    <div style={`background: ${palette[2]}`}>{palette[2]}</div>
    <div style={`background: ${palette[3]}`}>{palette[3]}</div>
    <div style={`background: ${palette[4]}`}>{palette[4]}</div>
  </div>
  <div class="btn">
    <svg
      on:click={() => (palette = randomPalette())}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      display="block"
      id="ArrowCycle"
      ><path d="M22 12c0 6-4.39 10-9.806 10C7.792 22 4.24 19.665 3 16" /><path
        d="M2 12C2 6 6.39 2 11.806 2 16.209 2 19.76 4.335 21 8"
      /><path d="M7 17l-4-1-1 4" /><path d="M17 7l4 1 1-4" /></svg
    >
  </div>
</div>

<style lang="scss">
  #colors {
    grid-area: colors;

    display: flex;

    .colors {
      flex: 1;
      display: grid;
      place-items: stretch;
      grid-template-rows: repeat(5, 1fr);

      div {
        font-size: 1rem;
        font-weight: bold;
        padding: 0.2rem;
      }
    }

    .btn {
      background: var(--grey-2);
      padding: 0 0.8rem;
      display: grid;
      place-items: center;

      svg {
        user-select: none;
        height: 1.2rem;
        width: 1.2rem;

        path {
          color: var(--grey-1);
        }

        background: var(--grey-3);
        padding: 0.6rem;
        border-radius: 0.4rem;
        box-shadow: 0 0 0.6rem rgba(0, 0, 0, 0.2);
        cursor: pointer;

        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }
</style>
