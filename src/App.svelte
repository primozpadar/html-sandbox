<script lang="ts">
  import MonacoEditor from "./lib/MonacoEditor.svelte";
  import Colors from "./lib/Colors.svelte";
  import Toolbar from "./lib/Toolbar.svelte";
  import { saveAs } from "file-saver";

  let codeFrame: HTMLIFrameElement;
  let val: string;

  const changeHandler = (e: CustomEvent<string>) => {
    codeFrame.srcdoc = e.detail;
    val = e.detail;
  };

  const saveHandler = () => {
    const blob = new Blob(["<!DOCTYPE html>\n", val], {
      type: "data:text/html;charset=utf-8",
    });
    saveAs(blob, "index.html");
  };
</script>

<main>
  <Toolbar on:save={saveHandler} />
  <MonacoEditor language="html" on:change={changeHandler} />
  <Colors />
  <iframe
    bind:this={codeFrame}
    seamless={true}
    frameborder="0"
    title="renderer"
    id="renderer"
  />
</main>

<style lang="scss">
  :root {
    --grey-1: rgb(36, 36, 36);
    --grey-2: rgb(43, 43, 43);
    --grey-3: rgb(87, 87, 87);

    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  :global(body) {
    background: #fff;

    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: sans-serif;
  }

  main {
    overflow: hidden;
    height: 100vh;
    width: 100vw;

    display: grid;
    place-items: stretch;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto 1fr 8rem;
    grid-template-areas:
      "editor toolbar"
      "editor renderer"
      "colors renderer";

    #renderer {
      grid-area: renderer;
    }

    @media (max-width: 800px) {
      grid-template-columns: 1fr;
      grid-template-rows: auto 8rem 1fr 1fr;
      grid-template-areas:
        "toolbar"
        "colors"
        "editor"
        "renderer";
    }
  }
</style>
