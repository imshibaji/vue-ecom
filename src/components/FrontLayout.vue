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
            <VaSidebarItemContent>
              <VaIcon name="home" /> 
              <VaSidebarItemTitle>
                Home
              </VaSidebarItemTitle>
            </VaSidebarItemContent>
          </VaSidebarItem>
          <VaSidebarItem :active="page === 2" @click="page = 2">
            <VaSidebarItemContent>
              <VaIcon name="phone" />
              <VaSidebarItemTitle>
                About
              </VaSidebarItemTitle>
            </VaSidebarItemContent>
          </VaSidebarItem>
        </VaSidebar>
      </template>
  
      <template #content>
        <slot></slot>
      </template>
    </VaLayout>
  </template>