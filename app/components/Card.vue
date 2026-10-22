<template>
  <div class="card">
    <img v-if="resource.imageUrl" class="card-img-top" :src="resource.imageUrl" :alt="resource.title">
    <div class="card-body">
      <h5 class="card-title">{{ resource.title }}</h5>
      <h6 class="dc-card-subtext">{{ hostname }}</h6>

      <p class="card-text">{{ resource.content }}</p>
      <a v-if="href" :href="href" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Go There</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Resource } from '~/types/resources'

const props = defineProps<{
  resource: Resource
}>()

// Only link out to web addresses, so a bad value from the API can't become a javascript: link.
const href = computed(() => /^https?:\/\//i.test(props.resource.action) ? props.resource.action : undefined)

// Just show the hostname of the resource, e.g. "youtube.com".
const hostname = computed(() => {
  try {
    return new URL(props.resource.action).hostname.replace(/^www\./, '')
  } catch {
    return ''
  }
})
</script>

<style>
.dc-card-subtext {
  font-style: italic;
  font-size: 0.75rem;
}

.card-title {
  margin-bottom: 2px;
}
</style>
