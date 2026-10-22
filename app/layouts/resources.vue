<template>
  <div id="wrapper" class="main-content" :class="{ toggled: !showMenu }">
    <div class="d-flex content-body">
      <Sidebar />
      <div id="main-content">
        <SiteNavbar expand="lg">
          <button id="sidebar-toggle" class="btn btn-outline-info" type="button" @click="showMenu = !showMenu">
            {{ toggleCopy }}
          </button>
        </SiteNavbar>
        <slot />
      </div>
    </div>
    <SiteFooter />
  </div>
  <!-- /#wrapper -->
</template>

<script setup lang="ts">
const showMenu = useState('showMenu', () => true)

const toggleCopy = computed(() => (showMenu.value ? 'Show' : 'Hide') + ' categories')
</script>

<style>
.content-body {
  flex: 1 0 auto;
}

@media (min-width: 480px) {
  #sidebar-toggle {
    display: none;
  }
}
</style>
