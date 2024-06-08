<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>

  <div @click="chengeTitle()">chengeTitle</div>
  {{ aaa }}
  {{ bbb }}
  {{ theme.title }}
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { Ref } from 'vue';

const props = defineProps<{ msg: string }>()
console.log(props.msg)


const aaa = ref('aaa')
const bbb: Ref<string | number> = ref('aaaa');
function chengeTitle() {
  aaa.value = 'ssssssss';
  bbb.value = 123;
  theme.title = 123;
  console.log('aaaa')
}

const test = () => {
  console.log('test')
}

interface Theme {
  title: string | number;
}
const theme: Theme = reactive({ title: 'TypeScript' }) // 推斷得到的型別：{ title: string }
console.log(theme.title)

const count = ref(0);

defineExpose({
  chengeTitle,
  test,
  aaa
});
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
