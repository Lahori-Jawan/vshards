<template>
  <div class="custom-control" :class="[toggle ? 'custom-toggle' : 'custom-checkbox']">
    <input type="checkbox" :id="id" :name="`customcheckbox`" class="custom-control-input" :checked="value" @input="$emit('input', !value)" v-bind="$attrs">
    <label class="custom-control-label" :for="id" v-html="label"></label>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ''
    },
    value: Boolean,
    id: {
      type: String,
      required: true
    },
    toggle: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
.custom-control-label {
  position: initial !important;
}
.custom-control-label::before {
  left: 0 !important;
}
</style>

