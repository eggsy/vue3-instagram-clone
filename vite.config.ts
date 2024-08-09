import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Icons from "unplugin-icons/vite";
import Pages from "vite-plugin-pages";
import Unfonts from "unplugin-fonts/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Icons({
      autoInstall: true,
    }),
    Pages({
      dirs: ["src/views"],
    }),
    Unfonts({
      google: {
        families: ["Inter", "Satisfy"],
      },
    }),
  ],
});
