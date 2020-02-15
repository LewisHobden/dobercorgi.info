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
  validate ({ params, query, store }) {  
    return store.state.categories[params.category] !== undefined;
  },
  components: {
    Card
  },
  computed: {
    categories () {
      return this.$store.state.categories;
    },
    active () {
      return this.$route.params.category;
    },
    activeData () {
      return this.categories[this.active];
    }
  },
  layout: 'resources'
}
</script>

<style>
.card {
  margin-bottom: 12px;
}
</style>
