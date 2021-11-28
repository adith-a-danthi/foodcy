export const state = () => ({
  restaurants: [],
})

export const mutations = {
  updateRestaurants(state, restaurants) {
    state.restaurants = restaurants
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
            .then(response => response.json())
            .then(data => {
              commit('updateRestaurants', data)
            })
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  },
}
