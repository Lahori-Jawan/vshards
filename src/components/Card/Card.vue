<template>
  <div class="card">
    <img :class="[overlay ? 'card-img' : 'card-img-top']" :src="img" :alt="alt" v-if="img.length">
    <div :class="[overlay ? 'card-img-overlay' : 'card-body']">
      <h4 class="card-title" v-html="title"></h4>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    img: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    },
    overlay: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getImage () {
      return (require(this.img))
    }
    
  }
}
</script>

<style>

</style>
