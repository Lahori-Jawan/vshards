<template>
  <button v-bind="$attrs" type="button" :class=getClasses v-html="content"></button>
</template>

<script>
// ! buton group is missing
let collor = 'secondary'
export default {
  created () {
    let keys = Object.keys(this.$attrs)
    keys.forEach(key => {
        Array('primary', 'secondary', 'success', 'danger', 'info', 'warning', 'light', 'dark')
        .some(color => {
          if(color === key) {
            // delete Object.assign(this.$props, {[color]: true })[collor]
            collor = color
            return true;
          }
          
        })
        // console.log('global',{collor}, this.$props, this.$attrs)
      // ['primary', 'secondary', 'success', 'danger', 'info', 'warning', 'light', 'dark'].some(function(value) {
      //   console.log({value})
      // })
    })
  },
  props: {
    pill: {
      type: Boolean,
      default: false
    },
    outline: {
      type: Boolean,
      default: false
    },
    // color: {             // to enable it, remove computed props, created hook and un-comment line 65
    //   type: String,
    //   default: 'secondary',
    //   validator: (color) => ['primary', 'secondary', 'success', 'danger', 'info', 'warning', 'light', 'dark']
    //               .indexOf(color != -1 )
    // },
    content: {
      type: String,
      required: true
    },
    square: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      validator: (size) => ['sm', 'md', 'lg'].indexOf(size != -1)
    }
  },
  computed: {
    getClasses () {
      let classes = 'btn'
      this.pill ? classes += ' btn-pill' : '' 
      this.outline ? classes += ` btn-outline-${collor}` : classes += ` btn-${collor}`
      // this.outline ? classes += ` btn-outline-${this.color}` : classes += ` btn-${this.color}`
      //? buttons classes
      this.square ? classes += ' btn-squared' : '' 
      this.size && this.size.trim().length ? classes += ` btn-${this.size}` : ''
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
