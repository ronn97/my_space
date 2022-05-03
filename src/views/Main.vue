<script>
import { defineComponent, reactive, onMounted, ref } from 'vue'
import Head from '@/components/head/Index.vue';
import Foot from '@/components/foot/Index.vue';
import BackInteract from '@/components/backinteract/Index.vue';

import GLOBE from 'vanta/dist/vanta.globe.min';
export default defineComponent({
  components: {
    Head,
    Foot,
    BackInteract
  },

  setup() {
    const vantaRef = ref(null) //核心
    onMounted(() => {
      GLOBE({
        el: '#app',
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00
      })
    });
    return {
      vantaRef
    }
  }
});
</script>

<template>
  <div id="body" ref="vantaRef">

    <Head />
    <div id="main">
      <router-view></router-view>
    </div>
    <Foot />
    <BackInteract />
  </div>
</template>


<style lang="scss">
#body {
  width: 100vw;
  height: 100vh;
  overflow: auto;

  #main {
    width: 10rem;
    max-width: 100vw;
    font-size: 0.2rem;
    min-height: 1rem;
    padding: 0.6rem 0 1rem;
    margin: 0 auto;
  }
}
</style>