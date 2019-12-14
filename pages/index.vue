<template>
<div class="content">
  <div class="row">
      <div class="col-sm-6" v-bind:key="item.title" v-for="item in getActiveData()">
          <card :guide=item />
      </div>
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
    }
  },
  methods: {
    getActiveData () {
      return this.guides[this.active];
    }
  }
}
</script>

<style>
.content {
  padding: 20px;
}
</style>
