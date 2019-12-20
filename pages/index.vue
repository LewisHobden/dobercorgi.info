<template>
<div class="content">
  <h1>Homepage</h1>
  <marquee>Website preamble</marquee>
  <p>Use the links in the menu above to go to our guides.</p>
</div>
</template>

<script>
import Card from '~/components/Card.vue'

export default {
  components: {
    Card
  },
  transition: "default",
  computed: {
    guides () {
      return this.$store.state.guides;
    },
    acve () {
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
}
</style>
