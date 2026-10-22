<template>
  <nav class="navbar bg-light" :class="`navbar-expand-${expand}`">
    <div class="container-fluid">
      <slot />

      <button
        class="navbar-toggler"
        type="button"
        aria-controls="nav-collapse"
        :aria-expanded="open"
        aria-label="Toggle navigation"
        @click="open = !open"
      >
        <span class="navbar-toggler-icon" />
      </button>

      <div id="nav-collapse" class="collapse navbar-collapse" :class="{ show: open }">
        <!-- Right aligned nav items -->
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <NuxtLink class="nav-link" exact-active-class="active" to="/">Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" active-class="active" to="/resources">Resources</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  expand: 'sm' | 'lg'
}>()

const open = ref(false)
const route = useRoute()

// Collapse the menu again once the user has picked somewhere to go.
watch(() => route.fullPath, () => {
  open.value = false
})
</script>
