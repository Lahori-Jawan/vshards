<template>
  <div id="app" class="container">
    <!-- Alert -->
    <div id="alerts">
      <blockquote class="blockquote">Alerts</blockquote>
      <Alert closable type="primary" content="This is a primary alert—check it out!" />
      <Alert type="secondary" content="This is a secondary alert—check it out!" :duration="5000" />
      <Alert closable type="success" content="<strong>Yay!</strong> Everything is fine!" />
      <Alert closable type="danger" content="This is a danger alert—check it out!" />
      <Alert closable type="warning" content="This is a warning alert—check it out!" />
      <Alert nofade closable type="info" content="This is a info alert-check it out!" />
      <Alert nofade type="light" content="This is a light alert—check it out!" />
      <transition name="slide">
        <Alert nofade closable type="dark" content="This is a dark alert—check it out!" 
              @alertRemoved="slide = false" v-if="slide">
          <!-- <span slot-scope="{closed}">
            {{ closed }}
          </span> -->
        </Alert>
      </transition>
    </div>
    <!-- Badges -->
    <div id="badges" class="my-4">
      <blockquote class="blockquote">Badges</blockquote>
      <Badge pill color="primary" content="Primary" class="mx-2" />
      <Badge pill outline content="Secondary" class="mx-2" />
      <Badge pill color="info" content="Info" class="mx-2" />
      <Badge color="success" content="Sucess" class="mx-2" />
      <Badge outline pill color="warning" content="Warning" class="mx-2" />
      <Badge pill color="danger" content="Danger" class="mx-2" />
      <Badge color="dark" content="Dark" class="mx-2" />
      <Badge color="light" content="Light" class="mx-2" />
      <button class="btn btn-outline-secondary">
        Notifications <Badge pill color="secondary" content="10" class="mx-2" />
      </button>
    </div>
    <!-- Buttons -->
    <div id="buttons">
      <blockquote class="blockquote">Buttons</blockquote>
      <s-Button primary content="Submit" class="mx-2" />
      <s-Button secondary size="sm" content="Submit" class="mx-2" />
      <s-Button pill danger content="Submit" class="mx-2" />
      <s-Button pill size="lg" primary content="Submit" class="mx-2" />
      <s-Button pill outline secondary content="Submit" class="mx-2" />
      <s-Button outline danger content="Submit" class="mx-2" />
      <s-Button pill square light content="Submit" class="mx-2" />
      <s-Button square outline warning content="Submit" class="mx-2" />
      <s-Button square dark content="Submit" class="mx-2" />
    </div>
    <!-- noUiSlider -->
    <div class="section">
      <blockquote class="blockquote">Slider</blockquote>
      <div id="slider" class="col-sm">
        <veeno :set="setValue"
          :handles="10" @update="updateValues" tooltips
          :range = "{ 'min': 100, 'max': 350 }"
          :options="{pips: {mode: 'range', density: 5}}"
        >
        {{ setValue }}
        </veeno>
        <div id="buttons">
          <s-Button primary outline class="mx-2" content="Set" @click.native="setValue = 250" />
          <!-- <s-Button class="mx-2" content="Set" @click.native="setValue = [250]" /> -->
        </div>
        <!-- rtl i.e. right-to-left -->
        <veeno v-model="sliderValue" 
          rtl :getset="getSlider"
          :handles="10" @update="updateValues" 
          :range = "{ 'min': 100, 'max': 350 }"
        >
          {{ sliderValue }}
        </veeno>
        <div>
          <s-Button warning placeholder="whoa" square class="mx-2" content="Disable" @click.native="disableSlider" />
        </div>
        <veeno class="wow" id="shards-custom-slider1" 
          connect :tooltips="[true, true]"
          :handles="[2000, 2650]" @update="updateValues" 
          :range = "{ 'min': 1300, 'max': 3250 }" 
        />
        <veeno class="wow" id="shards-custom-slider1" 
          connect 
          behaviour="drag-fixed"
          :handles="[1500, 2250]" @update="updateValues" 
          :range = "{ 'min': 1000, 'max': 3000 }" 
        />
        <veeno 
          class="wow" id="shards-custom-slider2" 
          :handles="[15, 62, 74, 88]" 
          behaviour="drag"
          :connect="[true, false, false, true, false]" 
          :step="5"
          @start="slideStart"
          @slide="slideBegin"
          @update="updateValues"
          @change="onChange"
          @set="onSet"
          @end="onEnd"
          :range = "{ 'min': 0, 'max': 100 }"
          :options= "{pips: {mode: 'range', density: 3}}"
        />
        <!-- non-linear range + step -->
        <veeno pipsy 
          class="wow" id="shards-custom-slider2" 
          :handles="[3000]" 
          :step="150"
          @update="updateValues"
          :range = "{ 
            'min': [  2000 ],
            '30%': [  4000, 500 ],
            '70%': [  8000 ],
            'max': [ 10000 ]
          }"
        />
      </div>
    </div>
    <!-- Modal -->
    <div id="modal" class="section">
      <blockquote class="blockquote">Modal</blockquote>
      <div class="col-sm text-center">
        <Modal ref="modal" title="Header" @modalClose="modalClose">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius aut, libero veritatis distinctio ipsa ad nostrum eligendi voluptate accusantium quia explicabo quasi animi illum dolores.
          <p slot="footer">
            <s-Button primary content="Submit" class="mx-2"></s-Button>
            <s-Button danger content="Cancel" class="mx-2" @click.native="$refs.modal.toggle()"></s-Button>
          </p>
        </Modal>
        <s-Button info content="Open Modal" @click.native="$refs.modal.show()" />
      </div>
    </div>
    <!-- Card -->
    <div id="card" class="row section">
      <blockquote class="blockquote">Cards</blockquote>
      <div class="col-sm-12 my-4">
        <Card>
          He seems sinking under the evidence could not only grieve and a visit. The father is to bless and placed in his length hid...
        </Card>
      </div>
      <div class="col-sm-6">
        <Card title="Sample Card Title" :img="getImage">
          <p class="card-text">He seems sinking under the evidence could not only grieve and a visit. The father is to bless and placed in his length hid...</p>
          <s-Button primary content="Tell me more &rarr;" />
        </Card>
      </div>
      <div class="col-sm-6">
        <Card overlay title="Sample Card Title" :img="getImage" class="text-white">
          <p class="card-text">He seems sinking under the evidence could not only grieve and a visit. The father is to bless and placed in his length hid...</p>
          <s-Button primary content="Tell me more &rarr;" />
        </Card>
      </div>
    </div>
    <!-- Progress -->
    <div id="progress">
      <blockquote class="blockquote">Progress</blockquote>
      <Progress :value="'25'" />
      <Progress animated stripped color="warning" :value="'30'">30</Progress>
      <Progress size="sm" color="danger" :value="'60'">60</Progress>
      <ProgressWrapper>
        <ProgressLabel>I am progress label</ProgressLabel>
        <Progress size="lg" animated stripped color="success" value="45">
          <ProgressValue>45</ProgressValue>
        </Progress>
      </ProgressWrapper>
      <ProgressShades :layers="3" :value=value />
      <ProgressShades stripped :layers="4" :value=value />
      <ProgressShades animated stripped :layers="7" :value=value />
    </div>
    <!-- Custom Control -->
    <div id="custom-controls">
      <blockquote class="blockquote">Custom Controls</blockquote>
      <CheckBox toggle id="toggle" class="my-2" label="I am toggled?" v-model="toggle" />
      <CheckBox id="checkbox1" class="my-2" :label="amIChecked(checked1)" v-model="checked1" />
      <CheckBox id="checkbox2" class="my-2" :label="amIChecked(checked2)" v-model="checked2" />
      <div class="custom-controls-stacked">
        <Radio id="radio1" v-model="radio1">Radio 1</Radio>
        <Radio id="radio2" v-model="radio1">Radio 2</Radio>
      </div>
    </div>
    <!-- Popover-Tooltip -->
    <div id="tooltips" class="row section">
      <div class="col-sm-3">
        <s-Button info square v-tooltip="getTooltipOptions"
        content="Top" class="mx-2" />
      </div>
      <div class="col-sm-3">
        <s-Button info square v-tooltip.left="getTooltipOptions"
          content="Left" class="mx-2" />
      </div>
      <div class="col-sm-3">
        <s-Button info square v-tooltip.bottom="getTooltipOptions"
          content="Bottom" class="mx-2" />
      </div>
      <div class="col-sm-3">
        <s-Button info square v-tooltip.right="getTooltipOptions"
          content="Right" class="mx-2" />
      </div>
      <div class="col-sm-3 my-4">
        <CheckBox toggle v-model="isOpen" id="toggle-tooltip" label="Toggle Popover" />
      </div>
      <div class="row">
        <div class="col-sm-3">
        <s-Button info square v-tooltip="'I am Tooltip'"
        content="Hover me" class="mx-2" />
      </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import veeno from 'veeno';
import Alert from './components/Alert/Alert';
import Badge from './components/Badge';
import Button from './components/Button';
import { CheckBox, Radio } from './components/CustomControls';
import Modal from './components/Modal/Modal';
import Card from './components/Card/Card';
import { Progress,
        ProgressShades,
        Wrapper as ProgressWrapper, 
        Label as ProgressLabel, 
        Value as ProgressValue } from './components/Progress/index.js'
export default {
  name: 'app',
  created () {
    let interval = setInterval(() => {
      let val = parseInt(this.value)
      if(val >= 100) {
        clearInterval(interval);
        return
      }
      this.value = String( ++val)
    }, 1000)
    
    //* keep updating/setting newValue for slider
    // setInterval(() => {
    //   this.setValue = (Math.random(100)*350)
    // }, 2500)
  },
  data () {
    return {
      toggle: true,
      checked1: true,
      checked2: false,
      radio1: true,
      radio2: false,
      slide : true,
      value: '0',
      interval: '',
      sliderValue: null,
      setValue: 0,
      slider : Object,
      isOpen: true  // initial tooltip state
    }
  },
  methods: {
    amIChecked (check) {
      return `I am ${check ? 'Checked' : 'not Checked'}`
    },
    getSlider (slider) {
      this.slider = slider
    },
    disableSlider () {
      this.slider.setAttribute('disabled', true);
    },
    modalClose () {
      console.log('Modal Closed')
    },
    // noUiSlider plugin api
    updateValues ({value, values, handles, ...e}) {
      // console.log('onUpdate',{value}, e)
    },
    slideStart ({values, handle, unencoded, tap, positions}) {
      // console.log('onStart',{values, handle, unencoded, tap, positions})
    },
    slideBegin (e) {
      // console.log('onSlide e',{e})
    },
    onChange (e) {
      // console.log('onchange',{e})
    },
    onSet (e) {
      // console.log('onset',{e})
    },
    onEnd (e) {
      // console.log('onend',{e})
    },

  },
  computed: {
    getImage () {
      return require('@/assets/images/demo/stock-photos/1.jpg')
    },
    getTooltipOptions () {
      return {
        content: 'Valar Morgulis lacu.',
        show: this.isOpen,
        trigger: 'manual'
      }
    }
  },
  components: {
    veeno,
    Alert,
    Badge,
    Card,
    's-Button': Button,
    CheckBox, Radio,
    Progress, ProgressShades,ProgressWrapper, ProgressLabel, ProgressValue,
    Modal
  }
}
</script>

  <style lang="scss">

// demo page
html, body {    
  height: 100%; // help differentiate scrollHeight vs clientHeight
}
#app blockquote {
  margin: 2rem 0;
}
#app {
  padding-bottom: 1.5rem;
}
div.row:last-child {
  padding-top: 4rem;
  margin-top: 3rem;
  position: relative;
}
#slider {
  width: 100%;
  min-height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

// transition
.slide-enter-active,
.slide-leave-active {
  transition: all 0.33s;
}

.slide-enter, .slide-leave-to {
  transform: translateX(1000px);
}

/* Customize components */
.container .alert-dark {
  background: rgb(36, 77, 77);
  color: #fff;
}
span.vspan:empty {
  opacity: 0;
}
span.vspan {
  margin-top: 2rem;
  margin-left: 10rem;
  background: aliceblue;
  padding: .5rem;
  border-radius: 5%;
}

.text-white .card-text {
  color: #fff;
}

#tooltips::before {
  position: absolute;
  content: 'Popover & Tooltips';
  top: 0;
  font-size: 1.8rem;
}

</style>
