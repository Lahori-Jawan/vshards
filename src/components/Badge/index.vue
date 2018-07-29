<template>
  <span :class=getClasses> {{ content }} </span>
</template>

<script>
export default {
  props: {
    pill: {
      type: Boolean,
      default: false
    },
    outline: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'secondary',
      validator: (color) => ['primary', 'secondary', 'success', 'danger', 'info', 'warning', 'light', 'dark']
                  .indexOf(color != -1 )
    },
    content: {
      type: String,
      required: true
    }
  },
  computed: {
    getClasses () {
      let classes = 'badge'
      this.pill ? classes += ' badge-pill' : '' 
      this.outline ? classes += ` badge-outline-${this.color}` : classes += ` badge-${this.color}`
      return classes
      // let badge = 'badge', color = ' secondary', classes = ''
      // classes += badge
      // thiscolor += badge + color
      // this.pill ? classes += ' badge-pill' : '' 
      // this.color || this.outline ? classes += ` badge-outline-${this.color}` : ` badge-${this.color}`
      // return classes
    }
  }
}
</script>

<style>

</style>
