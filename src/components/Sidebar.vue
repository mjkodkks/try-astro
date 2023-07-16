<template>
    <h1 class="text-2xl">Hi I'm Vue</h1>
    <ul>
        <li
            v-for="item in items"
            :key="item"
        >{{ item }}</li>
    </ul>
</template>

<script setup>
import { ref } from 'vue'
const items = ref([
    'Lorem ipsum 1',
    'Lorem ipsum 2',
    'Lorem ipsum 3',
    'Lorem ipsum 4',
])

</script>

<style></style>



