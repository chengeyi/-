<template>
    <div class="container">
        <h1>404</h1>
        <p>PAGE NOT FOUND</p>
        <p class="subtext">404_page_message</p>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
});
</script>

<style scoped lang="scss">
.container {
    text-align: center;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

h1 {
    font-size: 10em;
    margin: 0;
    color: #333333;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

p {
    margin: 0;
    font-size: 1.5em;
    color: #666666;
}

.subtext {
    font-size: 1em;
    color: #999999;
}
</style>