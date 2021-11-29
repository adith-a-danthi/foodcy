<template>
  <nav>
    <ul>
      <li>
        <nuxt-link to="/" class="nav-title">
          <app-logo />
          <h1>Foodcy</h1>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link exact to="/restaurants">Restaurants</nuxt-link>
      </li>
    </ul>
    <div v-if="cartCount > 0" class="smallnum">{{ cartCount }}</div>
    <nuxt-link to="/cart">Cart</nuxt-link>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import AppLogo from '@/components/AppLogo.vue'

export default {
  components: {
    AppLogo,
  },
  computed: {
    ...mapGetters(['cartCount']),
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

.smallnum {
  position: absolute;
  border-radius: 1000px;
  background: white;
  color: black;
  top: 9px;
  right: 33px;
  width: 25px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 25px;
  font-size: 10px;
  padding: 6px 10px;
  font-weight: bold;
}

</style>
