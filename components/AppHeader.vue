<template>
  <nav>
    <ul>
      <li>
        <nuxt-link to="/"><app-logo /></nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import AppLogo from '@/components/AppLogo.vue'

export default {
  components: {
    AppLogo,
  },
}
</script>

<style lang="scss" scoped></style>
