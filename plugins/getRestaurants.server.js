// Executes on the server when it starts
export default async ({ store }) => {
  await store.dispatch('fetchRestaurants')
}
