<template>
  <main class="container">
    <app-toast v-if="cartSubmitted" class="toast">
      <p>Order Submitted!</p>
      <p>
        Return to
        <nuxt-link to="/restaurants"> restaurants </nuxt-link>!
      </p>
    </app-toast>

    <section
      class="image"
      :style="`background: url(/${menuItem.img}) no-repeat center center`"
    ></section>

    <section class="details">
      <h1>{{ menuItem.item }}</h1>
      <h3>Price: ${{ menuItem.price.toFixed(2) }}</h3>

      <div class="quantity">
        <input v-model="quantity" type="number" min="1" step="1" />
        <h3 class="mx-2">${{ combinedPrice }}</h3>
      </div>
      <button class="btn-secondary" @click="addToCart">Add to Cart</button>

      <fieldset v-if="menuItem.options">
        <legend><h3>Options</h3></legend>
        <div v-for="option in menuItem.options" :key="option">
          <input
            :id="option"
            v-model="selectedOptions"
            type="radio"
            :name="option"
            :value="option"
          />
          <label :for="option">{{ option }}</label>
        </div>
      </fieldset>

      <fieldset v-if="menuItem.addOns">
        <legend>
          <h3>Add Ons</h3>
        </legend>
        <div v-for="addon in menuItem.addOns" :key="addon">
          <input
            :id="addon"
            v-model="selectedAddOns"
            type="checkbox"
            :name="addon"
            :value="addon"
          />
          <label :for="addon">{{ addon }}</label>
        </div>
      </fieldset>
    </section>

    <section class="description">
      <h2>Description</h2>
      <p>{{ menuItem.description }}</p>
    </section>
  </main>
</template>

<script>
import { mapState } from 'vuex'
import { v4 as uuidv4 } from 'uuid'
import AppToast from '@/components/AppToast.vue'
export default {
  components: { AppToast },
  data() {
    return {
      id: this.$route.params.id,
      quantity: 1,
      selectedOptions: '',
      selectedAddOns: [],
      cartSubmitted: false,
    }
  },
  computed: {
    ...mapState(['restaurants']),
    menuItem() {
      let result
      for (const restaurant of this.restaurants) {
        for (const item of restaurant.menu) {
          if (item.id === this.id) {
            result = item
            break
          }
        }
      }
      return result
    },
    combinedPrice() {
      const total = this.quantity * this.menuItem.price
      return total.toFixed(2)
    },
  },
  methods: {
    addToCart() {
      const item = {
        id: uuidv4(),
        name: this.menuItem.item,
        price: this.combinedPrice,
        quantity: this.quantity,
        options: this.selectedOptions,
        addOns: this.selectedAddOns,
      }

      this.$store.commit('addToCart', item)
      this.cartSubmitted = true
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 60vw;
  margin: 10vh auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 50px 40vh 1fr;
  grid-template-areas:
    'toast toast'
    'image details'
    'description details';
  grid-gap: 3rem;
}

.image {
  grid-area: image;
  background-size: cover;
  border-radius: 0.5rem;
}

.details {
  grid-area: details;

  .quantity {
    display: flex;
    margin: 20px 0 40px;
    align-content: center;
  }
}
.description {
  grid-area: description;
}

.toast {
  grid-area: toast;
  justify-self: end;
  align-self: center;
}
</style>
