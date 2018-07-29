<template>
  <transition name="fade" appear>
    <div :class=getClasses role="alert" v-if=!closed :key="closed">
      <button type="button" class="close" aria-label="Close" v-if=closable @click=removeAlert>
        <span aria-hidden="true">&times;</span>
      </button>
      <span v-html="content"></span>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true
    },
    type: {
      type: String,
      validator: (color) => ['primary', 'secondary', 'success', 'danger', 'info', 'warning', 'light', 'dark']
                  .indexOf(color != -1 )
    },
    closable: {
      type: Boolean,
      default: false
    },
    nofade: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,
      default: 3000
    }
  },
  mounted () {
    if(!this.closable) {
      setTimeout(() => {
        this.closed = true
      }, this.duration);
    }
  },
  data () {
    return {
      closed : false
    }
  },
  methods: {
    removeAlert () {
      this.closed = !this.closed
      if(this.nofade && this.closed) {
        this.$emit('alertRemoved')
      }
    }
  },
  computed: {
    getClasses () {
      let classes = 'alert'
      this.type && this.type.trim().length ? classes += ` alert-${this.type}` : classes += ' alert-info'
      this.closable ? classes += ' alert-dismissible' : ''
      this.nofade ? '' : classes += ' fade show'    //? library(design) issue. why attach .show with .fade class
      return classes
    }
  }
}
</script>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: fade 0.33s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

</style>
