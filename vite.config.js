import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  base: '/Portfolio/', // <-- must match repo name
  plugins: [react()],
});
