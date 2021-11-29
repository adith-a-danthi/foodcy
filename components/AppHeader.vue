<template>
  <nav>
    <ul>
      <li>
        <nuxt-link to="/" class="nav-title"><app-logo /><h1>Foodcy</h1></nuxt-link>
      </li>
      <li>
        <nuxt-link exact to="/restaurants">Restaurants</nuxt-link>
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

<style lang="scss" scoped>

.nav-title {
  display: flex;
  align-items: center;
  justify-content: space-around;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0 0.5rem;
  }
}

</style>
