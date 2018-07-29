<template>
  <div class="progress" :class="{[`progress-${size}`]: size}">
    <div :class=getClasses role="progressbar" :style="{'width': `${value}%`}" v-for="layer in layers" :key="layer"
      :aria-valuenow="`${value}`" aria-valuemin="0" aria-valuemax="100">
        <slot />
      </div>
  </div>
</template>
// layers = 5 -> 100/5 = 20% per layer i.e. progress-bar
// value = 5% -> 5/20 < 20% -> layer1, 30/20 > 1
// value = 5% -> 5/20= 0.4 roundoff(.4) -> 1 i.e. layer1, 30/20 = 1.5 roundoff(1.5) -> 2 i.e. layer2
// 55/20 = 2.75 roundoff(2.75) -> 3 i.e. layer3, 69/20 = 3.45 roundoff(3.45) -> 4 i.e. layer4, 81/20 = 4.05 roundoff(4.05) -> 5 i.e. layer5
<script>
export default {
  created () {
    this.type = `bg-${this.color}`
  },
  props: {
    value: {
      type: String,
      required: true
    },
    size: {
      type: String,
      validator: (size) => ['sm', 'lg'].indexOf(size != -1)
    },
    color: {
      type: String,
      default: 'info',
      validator: (color) => ['primary', 'secondary', 'success', 'danger', 'info', 'warning', 'light', 'dark']
      // validator: (color) => colors
      .indexOf(color != -1 )
    },
    animated: {
      type: Boolean,
      default: false
    },
    stripped: {
      type: Boolean,
      default: false
    },
    layers: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      type: '',
      width: 0,
      colors: ['primary', 'secondary', 'success', 'danger', 'info', 'warning', 'light', 'dark']
    }
  },
  computed: {
    getClasses () {
      // progress-bar-striped, progress-bar-animated, bg-success
      // let classes = 'progress-bar'
      // this.stripped ? classes += ' progress-bar-striped' : ''
      // this.animated ? classes += ' progress-bar-animated' : ''
      // this.color && this.color.trim().length ? classes += ` bg-${this.color}` : classes += ` bg-info`
      // return classes
      return {
        'progress-bar': true,
        [this.type]: this.color,
        'progress-bar-striped': this.stripped,
        'progress-bar-animated': this.animated
      }
    }
  }
}
</script>

<style>
.progress.progress-sm {
  font-size: 0 ;
}
</style>
