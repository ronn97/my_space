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
  overflow-x: hidden;
  // height: 100vh;

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