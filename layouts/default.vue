<template>
  <div class="content">
      <app-header />
      <Nuxt />
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
export default {
    components: {
        AppHeader
    }
}
</script>

<style lang="scss">
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: 1.4;
}

*,
*::before,
*::after {
  font-family: 'Mulish', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  box-sizing: border-box;
  margin: 0;
}

h1,
h2,
h3,
h4 {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
}
</style>
