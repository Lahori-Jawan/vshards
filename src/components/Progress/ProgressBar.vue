<template>
  <div role="progressbar" :style="{'width': `${width}%`}" :class="color"
         :aria-valuenow=width aria-valuemin="0" aria-valuemax="100">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    limit: {
      type: Number,
      required: true
    },
    maxLimit: {
      type: Number,
      required: true
    },
    color: {
      type: String,
      // required: true
    }
  },
  data () {
    return {
      width: '',
      counter: 0
    }
  },
  watch: {
    value (newy, oldy) {
      // this.value >= this.maxLimit ? this.width = this.maxLimit : this.width = this.value   // bec all widths should be equal
      let difference = parseInt(newy) - parseInt(oldy)
      this.counter += difference
      if(this.value >= this.maxLimit && this.counter !== this.limit) {
        this.width = this.limit
        return
      }
      this.width = this.counter
      // this.counter === 20
      // console.log({oldy, newy}, difference)
      
    }
  }
}
</script>

<style>

</style>
