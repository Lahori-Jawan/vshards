<template>
  <div class="progress" :class="{[`progress-${size}`]: size}">
    <ProgressBar :class=getClasses v-for="(shade,i) in shades" :key="shade" 
      :limit=widthLimit :maxLimit="(++i*widthLimit)" :value=value :color="shade" />
  </div>
</template>
// layers = 5 -> 100/5 = 20% per layer i.e. progress-bar
// value = 5% -> 5/20 < 20% -> layer1, 30/20 > 1
// value = 5% -> 5/20= 0.4 roundoff(.4) -> 1 i.e. layer1, 30/20 = 1.5 roundoff(1.5) -> 2 i.e. layer2
// 55/20 = 2.75 roundoff(2.75) -> 3 i.e. layer3, 69/20 = 3.45 roundoff(3.45) -> 4 i.e. layer4, 81/20 = 4.05 roundoff(4.05) -> 5 i.e. layer5
<script>
import ProgressBar from './ProgressBar'
export default {
  created () {
    let percentage = 100
    this.type = `bg-${this.color}`
    this.widthLimit = percentage/this.layers
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
      default: 1,
      validator: (value) => value <= 7 ? true: false
    }
  },
  data () {
    return {
      type: '',
      width: 0,
      shades: [],
      widthLimit: Number,
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
        // [this.type]: this.color,
        'progress-bar-striped': this.stripped,
        'progress-bar-animated': this.animated
      }
    }
  },
  watch: {
    value (old, newy) {
      let digit = Math.ceil(this.value/this.widthLimit)
      if(this.value <=100 && digit > this.shades.length) {
        this.shades.push(`bg-${this.colors[digit]}`)
      }
    }
  },
  components: {
    ProgressBar
  }
}
</script>

<style>
.progress.progress-sm {
  font-size: 0 ;
}
</style>
