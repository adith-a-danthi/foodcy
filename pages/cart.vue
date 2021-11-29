<template>
  <main class="container cart">
    <h1>Cart</h1>

    <section>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Add Ons</th>
            <th>Amount</th>
            <th>Price ($)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cart" :key="item.id">
            <td>
              {{ item.name }}
              <span v-if="item.options">- {{ item.options }}</span>
            </td>
            <td>
              <span v-for="addOn in item.addOns" :key="addOn" class="comma">
                {{ addOn }}
              </span>
            </td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.price }}</td>
          </tr>
          <tr>
            <td colspan="3" />
            <td class="total">Total: ${{ totalPrice.toFixed(2) }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['totalPrice']),
  },
}
</script>

<style lang="scss" scoped>
.cart.container {
  padding: 100px;
  max-width: 1000px;
  margin: 0 auto;

  h2 {
    text-align: center;
  }

  .total {
    font-weight: bold;
  }

  .emptycart {
    text-align: center;
    line-height: 2;
  }
}
</style>
