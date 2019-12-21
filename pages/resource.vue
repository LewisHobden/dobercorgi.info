<template>
<div class="content">
  <div>
    <h1>{{ activeData.title }}</h1>
    <p>{{ activeData.description }}</p>
  </div>
  <div class="row" v-if="activeData.items.length">
      <div class="col-sm-6" v-bind:key="index" v-for="(category, index) in activeData.items">
          <card :resource=category />  
      </div>
  </div>

  <div class="alert alert-warning" v-else>
      No data here currently!
  </div>

  </div>
</template>

<script>
import Card from '~/components/Card.vue'

export default {
  components: {
    Card
  },
  computed: {
    resources () {
      return this.$store.state.resources.categories;
    },
    active () {
      return this.$store.state.active;
    },
    activeData () {
      return this.resources[this.active];
    }
  },
  transition: "default",
  layout: 'resources'
}
</script>

<style>
.content {
  padding: 20px;
}
</style>
