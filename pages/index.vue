<template>
<div class="content">
  <h1>Homepage</h1>
  <marquee>Website preamble</marquee>
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
