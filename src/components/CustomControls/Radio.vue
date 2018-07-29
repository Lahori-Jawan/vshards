<template>
  <div class="custom-control custom-radio">
    <input
      type="radio"
      :id="id" :name="name" class="custom-control-input"
      @change="$emit('change', $event.target.checked)"
    >
    <label class="custom-control-label" :for="id">
      <slot />
    </label>
  </div>
</template>

<script>
export default {
  created () {
    console.log('value', this.value)
  },
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean,
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      default: 'customRadio'
    }
  },
}
</script>

<style>

</style>
