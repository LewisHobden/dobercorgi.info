<template>
<div class="content category-content">
  <div>
    <h1>Pick a Category</h1>
    <hr />
    <ul class="list-group" v-bind:key="index" v-for="(category, index) in categories">
      <nuxt-link :to="'/resources/' + index " v-bind:data-active="index" class="list-group-item-action list-group-item">
        <li class="d-flex justify-content-between align-items-center">
          <div>
            <h4>{{ category.title }}</h4>
            <span>{{ category.description }}</span>
          </div>
            <span class="material-icons badge badge-pill">{{ category.icon }}</span>
        </li>
      </nuxt-link>
    </ul>
  </div>
  </div>
</template>

<script>
export default {
  computed: {
    categories() {
      return this.$store.state.categories;
    },
  },
  layout: 'default'
}
</script>

<style>
.content {
  padding: 20px;
}

@media(min-width: 480px) {
  .category-content {
    padding: 20px 20%;
  }
}
</style>
