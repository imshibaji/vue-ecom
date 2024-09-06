<script setup>
import FrontLayout from '@/components/FrontLayout.vue';
import { appName, getInfo } from '@/assets/script.js';
import $ from 'jquery';
import { onMounted } from 'vue';

onMounted(() => {
    $('#info').css('color', 'red').css('font-size', '20px');
});
</script>
<template>
<FrontLayout title="Home Page" >
    <h1>Home Page chenge</h1>
    <p>{{ appName }}</p>
    <p id="info" v-html="getInfo().replace(/\n/g, '<br>')"></p>
</FrontLayout>
</template>
<style scoped>

</style>