<template>
  <!-- Sidebar -->
  <div id="sidebar-wrapper" class="bg-light border-end">
    <div class="dc-sidebar--heading">Resources</div>
    <div v-for="(category, id) in categories" :key="id" class="list-group list-group-flush">
      <NuxtLink
        :to="`/resources/${id}`"
        :class="{ active: active === id }"
        class="list-group-item d-flex list-group-item-action"
      >
        <span class="material-icons dc-sidebar--badge badge rounded-pill text-reset">{{ category.icon }}</span>
        <span>{{ category.title }}</span>
      </NuxtLink>
    </div>
  </div>
  <!-- /#sidebar-wrapper -->
</template>

<script setup lang="ts">
const { categories } = useCategories()
const route = useRoute()

const active = computed(() => route.params.category)
</script>

<style>
#sidebar-wrapper {
  margin-left: -15rem;
  transition: margin .25s ease-out;
}

#sidebar-wrapper .dc-sidebar--heading {
  padding: 0.875rem 1.25rem;
  font-size: 1.2rem;
}

#sidebar-wrapper .list-group {
  width: 15rem;
}

#wrapper.toggled #sidebar-wrapper {
  margin-left: 0;
}

@media (min-width: 768px) {
  #sidebar-wrapper {
    margin-left: 0;
  }

  #wrapper.toggled #sidebar-wrapper {
    margin-left: -15rem;
  }
}

.dc-sidebar--badge {
  font-size: 1em;
}
</style>
