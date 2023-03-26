import { defineConfig } from "vite";
import liveReload from 'vite-plugin-live-reload' //for reload;
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(),liveReload('.path'),],
  root: "src",
});
