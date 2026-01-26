import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
// If you are using a framework plugin like React, import it as well
// import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    tailwindcss(),
    // ...other plugins like react()
  ],
});
