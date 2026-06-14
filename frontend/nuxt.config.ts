import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  // 1. Compatibility settings
  compatibilityDate: '2026-06-08',

  // 2. Modules
  modules: [
  ],

  // 3. Inject Tailwind natively into the Vite compiler
  vite: {
    plugins: [
      tailwindcss()
    ]
  },

  // 4. Developer experience tooling
  devtools: { enabled: true },

  // 5. Global Stylesheets (Dynamically finds your exact root path!)
  css: [
    fileURLToPath(new URL('./assets/css/main.css', import.meta.url))
  ],

  // 6. Nuxt 4 Strict Context TypeScript
  typescript: {
    typeCheck: false,
    tsConfig: {
      compilerOptions: {
        strict: true,
        noUncheckedIndexedAccess: true,
        noImplicitAny: true
      }
    }
  },

  // 7. Secure Multi-environment runtime state
  runtimeConfig: {
    supabaseServiceKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseAnonKey: process.env.SUPABASE_ANON_KEY,
    },
  },

  // 8. Global HTML Document Header settings
  app: {
    head: {
      title: 'Arrival Nusantara',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Experience the beauty of Indonesia with Arrival Nusantara' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Dancing+Script:wght@600;700&display=swap',
        },
      ],
    },
  },

})