<template>
  <section class="masthead" role="img" aria-label="Image Description">
    <h1>Foodcy</h1>
    <nuxt-link to="/restaurants">
      <button class="btn-secondary">
        See Restaurants >
      </button>
    </nuxt-link>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.masthead {
  width: 100%;
  height: 75vh;
  padding: 3rem;
  overflow: hidden;
  background-size: cover !important;
  background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 37%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(~/assets/hero-img.jpg) no-repeat center center scroll;
}

h1 {
  font-style: normal;
  font-weight: bold;
  color: #eee;
  font-size: 8vmin;
  letter-spacing: 0.03em;
  line-height: 1;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
  margin-bottom: 3rem;
}
</style>
