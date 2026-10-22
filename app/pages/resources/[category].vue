<template>
  <div v-if="category" class="content">
    <div>
      <h1>{{ category.title }}</h1>
      <p>{{ category.description }}</p>
    </div>
    <div v-if="category.items.length" class="row">
      <div v-for="(resource, index) in category.items" :key="index" class="col-sm-6">
        <Card :resource="resource" />
      </div>
    </div>

    <div v-else class="alert alert-warning">
      No data here currently!
    </div>
  </div>
</template>

<script setup lang="ts">
// Unknown categories are turned into a 404 by middleware/resources.global.ts.
definePageMeta({
  layout: 'resources'
})

const { categories } = useCategories()
const route = useRoute()

const category = computed(() => categories.value[route.params.category as string])
</script>

<style>
.card {
  margin-bottom: 12px;
}
</style>
