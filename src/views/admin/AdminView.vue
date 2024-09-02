<script setup>
import AdminLayout from '@/components/AdminLayout.vue';
const {title, mainMenus, subMenus} = defineProps(['title', 'mainMenus', 'subMenus']);
const mainMenu = mainMenus ||[
    { icon: 'dashboard', title: 'Dashboard', path: '/admin/'},
    { icon: 'person', title: 'Products', path: '/admin/products' },
    { icon: 'person', title: 'Users', path: '/admin/settings'},
];
</script>
<template>
<AdminLayout 
:title="'Admin ' + (title || '')"
:mainMenus="mainMenu"
:subMenus="subMenus"
>
    <slot></slot>
</AdminLayout>
</template>