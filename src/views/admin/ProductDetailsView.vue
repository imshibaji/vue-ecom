<script setup>
import AdminView from '@/views/admin/AdminView.vue';
import axios from 'axios';
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

const product = ref({});
const route = useRoute();
watchEffect(async () => {
    const url = 'https://fakestoreapi.com/products/' + route.params.id;
    const productData = await axios.get(url);
    console.log(productData.data);
    product.value = productData.data;
});
</script>
<template>
<AdminView title="Product Details">
    <h1 class="text-center text-2xl my-3 mb-5">Product Details</h1>
    <div class="w-1/3">
        <VaCard>
            <VaCardTitle><h3 class="text-xl">{{ product.title }}</h3></VaCardTitle>
            <div class="">
                <img class="w-full bg-cover" :src="product.image" :alt="product.title">
            </div>
            <va-card-content>
                <p>{{ product.description }}</p>
                <p class="text-green-500 text-lg">Price: {{ product.price }}</p>
            </va-card-content>
        </VaCard>
    </div>
</AdminView>
</template>