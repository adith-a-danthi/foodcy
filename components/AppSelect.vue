<template>
  <div class="restaurant">
    <label :for="select">What {{ select }} do you want?</label>

    <select
      :id="select"
      :name="select"
      @change="$emit('change', $event.target.value)"
    >
      <option disabled>
        Select an option
      </option>
      <option value>
        All
      </option>
      <option v-for="option in selectOptions" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    select: {
      type: String,
      default: 'Cusine'
    },
    selectOptions: {
      type: Array,
      default: () => ['Tacos', 'Pizza', 'Dim Sum']
    }
  }
}
</script>

<style lang="scss" scoped></style>