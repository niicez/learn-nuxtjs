// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    srcDir: 'src/',
    pages: true,

    modules: ['@nuxtjs/tailwindcss'],
    tailwindcss: {}
})
