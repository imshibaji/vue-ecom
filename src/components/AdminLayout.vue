<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
  import { ref, watchEffect } from 'vue';
import { RouterLink } from 'vue-router';
  import { useBreakpoint } from 'vuestic-ui'

  const {title, mainMenus, subMenus} = defineProps(['title', 'mainMenus', 'subMenus']);
  const breakpoints = useBreakpoint()

  const isSidebarVisible = ref(false)

  watchEffect(() => {
    isSidebarVisible.value = breakpoints.mdUp
  })

  const mainMenu = mainMenus ||[
    { icon: 'dashboard', title: 'Dashboard', path: '/'},
    { icon: 'person', title: 'About', path: '/about' },
    { icon: 'settings', title: 'Settings', path: '/settings'},
    { icon: 'notifications', title: 'Notifications', path: '/notifications' },
    { icon: 'account_circle', title: 'Account', path: '/account'},
  ]

  const subMenu = subMenus || [
    { icon: 'add', title: 'Add', path: '/add' },
    { icon: 'phone', title: 'Phone', path: '/phone' },
    { icon: 'email', title: 'Email', path: '/email' },
    { icon: 'settings', title: 'Settings', path: '/settings' },
    { icon: 'logout', title: 'Logout', path: '/logout' },
  ]
</script>

<template>
  <VaLayout
    :left="{ fixed: true, absolute: breakpoints.mdDown, order: 2 }"
    :top="{ fixed: true }"
  >
    <template #top>
      <VaNavbar>
        <template #left>
          <VaNavbarItem class="menubtn">
            <VaIcon
            :name="isSidebarVisible ? 'menu_open' : 'menu'"
            @click="isSidebarVisible = !isSidebarVisible"
            />
          </VaNavbarItem>
        </template>
        <template #center>
          <h1 class="logo">{{ title || 'My App' }}</h1>
        </template>
        <template #right>
            <VaNavbarItem v-for="{ icon, title, path} in mainMenu.slice(0, 3)" :key="title" class="responsive-btn">
              <RouterLink  :to="path">
                <VaIcon :name="icon" />
                {{ title }}
              </RouterLink>
            </VaNavbarItem>
          <VaNavbarItem>
            <VaIcon name="search" />
          </VaNavbarItem>
          <VaNavbarItem>
            <VaIcon name="person" />
          </VaNavbarItem>
        </template>
      </VaNavbar>
      <VaDivider style="margin: 0" />
    </template>

    <template #left>
      <div style="display: flex; height: 100%;">
        <VaSidebar
          width="min-content"
          color="primary"
          hover-color="secondary"
        >
          <VaSidebarItem
            v-for="{ icon, path } in mainMenu"
            :key="icon"
          >
          <RouterLink :to="path">
            <VaSidebarItemContent>
                <VaIcon :name="icon" />
            </VaSidebarItemContent>
          </RouterLink>
          </VaSidebarItem>
        </VaSidebar>
        <VaSidebar v-model="isSidebarVisible">
          <VaSidebarItem
            v-for="{ icon, title, path } in subMenu"
            :key="icon"
          >
          <RouterLink :to="path">
            <VaSidebarItemContent>
                <VaIcon :name="icon" />
                <VaSidebarItemTitle>
                  {{ title }}
                </VaSidebarItemTitle>
            </VaSidebarItemContent>
          </RouterLink>
          </VaSidebarItem>
        </VaSidebar>
      </div>
    </template>

    <template #content>
      <main>
        <article style="padding: 1rem">
          <slot></slot>
        </article>
      </main>
    </template>
  </VaLayout>
</template>
<style scoped>
.menubtn{
  @apply pl-14 sm:pl-14 md:pl-0;
}
  .responsive-btn {
    @apply hidden md:flex;
  }
  .logo {
    font-size: 1.5rem;
  }
  main{
    @apply ml-14 md:ml-0;
  }
</style>