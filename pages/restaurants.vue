<template>
  <main class="content restaurants">
    <div class="restaurant-heading">
      <h1>Restaurants</h1>

      <app-select @change="cuisine = $event" />
    </div>
    <app-restaurant-info :restaurants="filteredRestaurants" />
  </main>
</template>

<script>
import { mapState } from 'vuex'
import AppRestaurantInfo from '~/components/AppRestaurantInfo.vue'
import AppSelect from '~/components/AppSelect.vue'
export default {
  components: {
    AppSelect,
    AppRestaurantInfo,
  },
  data() {
    return {
      cuisine: '',
    }
  },
  computed: {
    ...mapState(['restaurants']),
    filteredRestaurants() {
      if (this.cuisine) {
        return this.restaurants.filter((restaurant) => {
          const name = restaurant.name.toLowerCase()
          return name.includes(this.cuisine.toLowerCase())
        })
      }
      return this.restaurants
    },
  },
}
</script>

<style lang="scss" scoped></style>
