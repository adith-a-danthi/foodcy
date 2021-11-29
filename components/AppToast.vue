<template>
  <div class="toast">
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.toast {
  background: #a8060e;
  color: white;
  border-radius: 0.5rem;
  padding: 0.75rem 1.5rem;
  text-align: center;

  a {
    color: white;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
