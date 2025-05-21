// @ts-check
import tailwindcss from "@tailwindcss/vite";
import pdf from "astro-pdf";
import { defineConfig } from "astro/config";
import path from "path";

// https://astro.build/config
export default defineConfig({
  site: "https://www.carlosortiz.dev",
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
  },
  integrations: [
    pdf({
      pages: {
        "/print": {
          path: "./carlos-ortiz-resume.pdf",
          pdf: {
            format: "A4",
          },
        },
      },
    }),
  ],
});
