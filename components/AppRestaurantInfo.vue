<template>
  <section class="restaurant-info">
    <div v-for="restaurant in restaurants" :key="restaurant.id">
      <div class="restaurant-header">
        <div>
          <h2>{{ restaurant.name }}</h2>
          <p>Delivery Time: {{ restaurant.deliveryTime }}min</p>
          <p>Rating {{ restaurant.rating }}</p>
        </div>
        <p v-if="restaurant.freeDelivery" class="label">
          <span>Free Delivery</span>
        </p>
      </div>
      <div class="restaurant">
        <div
          v-for="menuItem in restaurant.menu"
          :key="menuItem.id"
          :style="`background: url(/${menuItem.img}) no-repeat center center`"
          class="items"
        >
          <div class="iteminfo">
            <div>
              <h4>{{ menuItem.item }}</h4>
              <p>${{ menuItem.price.toFixed(2) }}</p>
            </div>
            <button class="btn-ghost">View Item ></button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    restaurants: {
      type: [Array, Object],
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
