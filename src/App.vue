<template>
  <div id="app">
    <SideNavbar />
    <Home2 />
    <!-- <Navbar /> -->
    <!-- <RouterView></RouterView> -->


    <!-- <div class="outside">
      <div class="inside" @click="insideClick()">
        123
      </div>
    </div> -->
    <!-- <HelloWorld msg="Vite + Vue" ref="helloWorld" /> -->
    <!-- <RouterView v-slot="{ Component }">
      <transition name="slide-fade" mode="out-in" :duration="{ enter: 500, leave: 300 }">
        <component :is="Component" />
      </transition>
    </RouterView> -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import SideNavbar from './components/SideNavbar.vue'
import Navbar from './components/Navbar.vue'
import Home2 from './pages/Home2.vue'
import { RouterView, useRouter, onBeforeRouteLeave, useRoute } from "vue-router";

const helloWorld = ref<InstanceType<typeof HelloWorld> | null>(null);
function insideClick() {
  helloWorld.value?.test();
  helloWorld.value?.chengeTitle();
  console.log(helloWorld.value?.aaa)
}

onMounted(() => {
  // 確保在掛載後調用 insideClick
  insideClick();
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/all.scss";
#app {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  display: flex;
  // flex-direction: column;
  // align-items: center;

  @include media-breakpoint-down(md) {
    flex-direction: column;
  }
}
</style>
