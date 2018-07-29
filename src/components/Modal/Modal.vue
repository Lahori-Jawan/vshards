  <template>
  <div id="shardsModal">
    <div class="modal fade" :class="{'show': showModal}" role="dialog" aria-labelledby="shardsModalLabel"   
      aria-hidden="true" :style="getStyleObject"
    >
      <div class="bg" @click="showModal = false" v-if="bg"></div>
        <div class="modal-dialog" tabindex="-1" role="document" :style="{'z-index': 2050}">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="shardsModalLabel">
                {{ title }}
              </h5>
              <button type="button" class="close" aria-label="Close" @click="showModal = false" v-if="!nocross">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <slot />
            </div>
            <div class="modal-footer">
              <slot name="footer" />
            </div>
          </div>
        </div>
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
    nocross: {
      type: Boolean,
      default: false
    },
    bg: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showModal: false,
    }
  },
  computed: {
    getStyleObject () {
      document.body.scrollHeight > document.body.clientHeight && document.body.classList.toggle('overflow')
      return {
        display: 'block', 
        'z-index': [!this.showModal ? -1: 1050],
        background: [this.showModal ? 'rgba(0, 0, 0, 0.05)': '']
      }
    }
  },
  methods: {
    show () {
      this.showModal = true;
    },
    toggle () {
      this.showModal = !this.showModal;
    }
  },
  watch: {
    showModal (showNew, hideOld) {
      // hideOld ? this.$emit('modalClose') : ''
      showNew ? setTimeout(() => this.$el.style.zIndex = 10 , 0) : 
       setTimeout(() => this.$el.style.zIndex = -1 , 250), this.$emit('modalClose')
      //  if(showPrev) {
      //    setTimeout(() => this.$el.style.zIndex = 10 , 10)
      //    return
      //  }
      //  setTimeout(() => this.$el.style.zIndex = -1 , 250)
      //  this.$emit('modalClose') 
    }
  }
}
</script>

<style>

#shardsModal {
  position: relative;
}

.bg {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}

.modal.fade {
  transition: opacity 200ms ease-in-out, background 200ms ease-in-out;
}

.overflow {
  overflow: hidden;
  /* padding-right: 18px; */
}

</style>
