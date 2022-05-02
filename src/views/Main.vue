<script>
import { defineComponent, reactive } from 'vue'
import Head from '@/components/head/Index.vue';
import Foot from '@/components/foot/Index.vue';
export default defineComponent({
  components: {
    Head,
    Foot
  },

  setup() {
    return {
      Head
    }
  }
});
</script>

<template>
  <div id="main">

    <Head />
    <!-- <div>我是main</div> -->
    <router-view></router-view>
    <Foot />
  </div>
</template>


<style>
#main {
  width: 100vw;
  height: 100vh;
}
</style>