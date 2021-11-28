<template>
  <div class="content">
    <Banner />
    <AppRestaurantInfo :restaurants="restaurants"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Banner from '~/components/Banner.vue'
import AppRestaurantInfo from '~/components/AppRestaurantInfo.vue'
export default {
  components: { Banner, AppRestaurantInfo },
  computed: {
    ...mapState(['restaurants']),
  },
}
</script>
