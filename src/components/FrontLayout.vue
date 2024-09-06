<script setup>

import { ref, watchEffect } from 'vue';
import { useBreakpoint } from 'vuestic-ui';
import { RouterLink } from 'vue-router';
  
const breakpoints = useBreakpoint();
const isSidebarVisible = ref(false);
watchEffect(() => {
  isSidebarVisible.value = breakpoints.mdUp
})
</script>

<!-- // https://fakestoreapi.com/docs -->
<template>
    <VaLayout style="height: 500px">
      <template #top>
        <VaNavbar
          color="primary"
          class="py-2"
        >
          <template #left>
            <VaButton
              :icon="showSidebar ? 'menu_open' : 'menu'"
              @click="showSidebar = !showSidebar"
            />
          </template>
          <template #center>
            <VaNavbarItem class="font-bold text-lg">
              LOGO
            </VaNavbarItem>
          </template>
        </VaNavbar>
      </template>
  
      <template #left>
        <VaSidebar v-model="showSidebar" class="py-4">
          <VaSidebarItem :active="page === 1" @click="page = 1">
            <RouterLink to="/">
            <VaSidebarItemContent>
              <VaIcon name="home" /> 
              <VaSidebarItemTitle>
                Home
              </VaSidebarItemTitle>
            </VaSidebarItemContent>
            </RouterLink>
          </VaSidebarItem>
          <VaSidebarItem>
            <RouterLink to="/about">
            <VaSidebarItemContent>
              <VaIcon name="phone" />
              <VaSidebarItemTitle>
                  About
              </VaSidebarItemTitle>
            </VaSidebarItemContent>
            </RouterLink>
          </VaSidebarItem>
          <VaSidebarItem>
            <RouterLink to="/products">
            <VaSidebarItemContent>
              <VaIcon name="phone" />
              <VaSidebarItemTitle>
                  Products
              </VaSidebarItemTitle>
            </VaSidebarItemContent>
            </RouterLink>
          </VaSidebarItem>
          <VaSidebarItem>
            <RouterLink to="/contact">
            <VaSidebarItemContent>
              <VaIcon name="phone" />
              <VaSidebarItemTitle>
                  Contact
              </VaSidebarItemTitle>
            </VaSidebarItemContent>
            </RouterLink>
          </VaSidebarItem>
        </VaSidebar>
      </template>
  
      <template #content>
        <slot></slot>
      </template>
    </VaLayout>
  </template>