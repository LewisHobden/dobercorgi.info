<template>
<div class="content">
  <div class="row" v-if="activeData">
      <div class="col-sm-6" v-bind:key="index" v-for="(item, index) in activeData">
          <card :guide=item />  
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
      return this.$store.state.guides;
    },
    active () {
      return this.$store.state.active
    },
    activeData () {
      return this.guides[this.active];
    }
  }
}
</script>

<style>
.content {
  padding: 20px;
  
  -webkit-transition: margin .25s ease-out;
  -moz-transition: margin .25s ease-out;
  -o-transition: margin .25s ease-out;
  transition: margin .25s ease-out;
}
</style>
