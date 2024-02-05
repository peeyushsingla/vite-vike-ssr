import { defineConfig } from 'vite'
import vike from 'vike/plugin';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vike({
    prerender: true,
  })],
})
