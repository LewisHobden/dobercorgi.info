<template>
  <div class="content category-content">
    <div>
      <h1>Pick a Category</h1>
      <hr>
      <div v-for="(category, id) in categories" :key="id" class="list-group mb-3">
        <NuxtLink
          :to="`/resources/${id}`"
          class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >
          <div>
            <h4>{{ category.title }}</h4>
            <span>{{ category.description }}</span>
          </div>
          <span class="material-icons badge rounded-pill text-reset">{{ category.icon }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { categories } = useCategories()
</script>

<style>
@media (min-width: 480px) {
  .category-content {
    padding: 20px 20%;
  }
}
</style>
