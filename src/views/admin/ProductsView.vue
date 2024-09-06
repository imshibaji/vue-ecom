<script setup>
import AdminView from '@/views/admin/AdminView.vue';
import axios from 'axios';
import { ref, watchEffect } from 'vue';

const products = ref([]);
watchEffect(async () => {
    const url = 'https://fakestoreapi.com/products';
    const productsData = await axios.get(url, {
        params: {
            limit: 9
        }
    });
    console.log(productsData.data);
    products.value = productsData.data;
});

</script>
<template>
<AdminView title="Products">
    <h1 class="text-center text-2xl my-3 mb-5">Products</h1>
    <div class="grid grid-cols-3 gap-2">
        <RouterLink v-for="product in products" :key="product.id" :to="`/admin/products/${product.id}`">
            <VaCard>
                <VaCardTitle><h3 class="text-xl">{{ product.title.slice(0, 30) }}</h3></VaCardTitle>
                <div class="h-40 overflow-hidden">
                    <img class="w-full bg-cover" :src="product.image" :alt="product.title">
                </div>
                <va-card-content>
                    <p>{{ product.description.slice(0, 100) }}...</p>
                    <p class="text-green-500 text-lg">Price: {{ product.price }}</p>
                </va-card-content>
            </VaCard>
        </RouterLink>
    </div>
</AdminView>
</template>