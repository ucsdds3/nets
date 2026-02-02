import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react"; // Uncommented this

export default defineConfig({
  plugins: [
    react(), // Uncommented this
    tailwindcss(),
  ],
  base: "/nets/",
});