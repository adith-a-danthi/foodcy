export const state = () => ({
  restaurants: [],
  cart: [],
})

export const getters = {
  cartCount: (state) => {
    if (!state.cart.length) return 0
    return state.cart.reduce((acc, cur) => {
      return acc + +cur.quantity
    }, 0)
  },
  totalPrice: (state) => {
    if (!state.cart.length) return 0
    return state.cart.reduce((acc, item) => {
      return acc + +item.price
    }, 0)
  },
}

export const mutations = {
  updateRestaurants(state, restaurants) {
    state.restaurants = restaurants
  },
  addToCart(state, item) {
    state.cart.push(item)
  },
}

export const actions = {
  async fetchRestaurants({ state, commit }) {
    if (state.restaurants.length) return

    try {
      await fetch(process.env.API_URL, {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.API_KEY,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          commit('updateRestaurants', data)
        })
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  },
}
