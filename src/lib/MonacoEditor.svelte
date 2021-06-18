<script lang="ts">
  import type monaco from "monaco-editor";
  import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
  import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker";
  import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";
  import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker";
  import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";
  import { createEventDispatcher, onMount } from "svelte";

  const dispatch = createEventDispatcher();
  let divEl: HTMLDivElement = null;
  let editor: monaco.editor.IStandaloneCodeEditor;
  let Monaco;

  const CODE_STORAGE_KEY = "local-code";

  export let language: string;

  onMount(async () => {
    // @ts-ignore
    self.MonacoEnvironment = {
      getWorker: function (_moduleId: any, label: string) {
        if (label === "json") {
          return new jsonWorker();
        }
        if (label === "css" || label === "scss" || label === "less") {
          return new cssWorker();
        }
        if (label === "html" || label === "handlebars" || label === "razor") {
          return new htmlWorker();
        }
        if (label === "typescript" || label === "javascript") {
          return new tsWorker();
        }
        return new editorWorker();
      },
    };

    Monaco = await import("monaco-editor");
    editor = Monaco.editor.create(divEl, {
      value: localStorage.getItem(CODE_STORAGE_KEY),
      language,
      theme: "vs-dark",
    });

    const changeHandler = () => {
      const val = editor.getValue();
      localStorage.setItem(CODE_STORAGE_KEY, val);
      dispatch("change", val);
    };

    changeHandler();
    editor.getModel().onDidChangeContent(changeHandler);

    return () => editor.dispose();
  });

  const handleWindowResize = () => {
    editor.layout({ height: 200, width: 200 });
    editor.layout();
  };
</script>

<svelte:window on:resize={handleWindowResize} />
<div bind:this={divEl} id="monaco-editor" />

<style>
  #monaco-editor {
    grid-area: editor;
  }
</style>
