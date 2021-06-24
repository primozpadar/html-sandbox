import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    VitePWA({
      manifest: {
        name: "HTML Sandbox",
        short_name: "HTML Sandbox",
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/maskable_icon.png",
            sizes: "640x640",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        start_url: "/",
        theme_color: "#e34c26",
        background_color: "#f06529",
        display: "standalone",
      },
    }),
  ],
});
