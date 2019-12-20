<template>
<div class="content">
  <div>
    <h1>{{ activeData.title }}</h1>
    <p>{{ activeData.description }}</p>
  </div>
  <div class="row" v-if="activeData">
      <div class="col-sm-6" v-bind:key="index" v-for="(category, index) in activeData.items">
          <card :guide=category />  
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
    guides () {
      return this.$store.state.guides.categories;
    },
    active () {
      return this.$store.state.active;
    },
    activeData () {
      return this.guides[this.active];
    }
  },
  transition: "default",
  layout: 'guides'
}
</script>

<style>
.content {
  padding: 20px;
}
</style>
