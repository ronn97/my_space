<script>
import { defineComponent, reactive } from 'vue'
import Head from '@/components/head/Index.vue';
import Foot from '@/components/foot/Index.vue';
export default defineComponent({
  components: {
    Head,
    Foot
  },

  // setup() {
  //   return {
  //     Head
  //   }
  // }
});
</script>

<template>
  <div id="body">

    <Head />
    <div id="main">
      <router-view></router-view>
    </div>
    <Foot />
  </div>
</template>


<style lang="scss">
#body {
  width: 100vw;
  height: 100vh;

  #main {
    width: 10rem;
    font-size: 0.2rem;
    min-height: 8rem;
    margin: 0 auto;
  }
}
</style>