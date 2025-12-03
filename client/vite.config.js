import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
    open: "http://localhost:3000",
  },
  //build 
   build:{
    sourcemap:false,
    minify:"esbuild",
    target:"es2020"
  }
});
