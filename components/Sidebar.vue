<template>
     <!-- Sidebar -->
    <div class="bg-light border-right" id="sidebar-wrapper">
        <div class="sidebar-heading">Resources</div>
        <div class="list-group list-group-flush" v-bind:key="index" v-for="(category, index) in categories">
            <nuxt-link :to="'/resources/' + index " v-bind:data-active="index" v-bind:class="{ active: checkIsActive(index) }" class="list-group-item list-group-item-action">
              <span class="material-icons badge badge-pill">{{ category.categoryIcon }}</span>
              {{ category.title }}
            </nuxt-link>
        </div>
    </div>
    <!-- /#sidebar-wrapper -->
</template>

<script>
export default {
  computed: {
    categories() {
      return this.$store.state.resources;
    },
    active() {
      return this.$route.params.category;
    }
  },
  methods: {
    changeActive(e) {
      this.$store.commit("CHANGE_ACTIVE",e.target.getAttribute("data-active"));
    },
    checkIsActive(category) {
      return this.active === category;
    }
  }
}
</script>

<style>
/*!
 * Start Bootstrap - Simple Sidebar (https://startbootstrap.com/template-overviews/simple-sidebar)
 * Copyright 2013-2019 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-simple-sidebar/blob/master/LICENSE)
 */
body {
  overflow-x: hidden;
}

#sidebar-wrapper {
  min-height: 100vh;
  margin-left: -15rem;
  -webkit-transition: margin .25s ease-out;
  -moz-transition: margin .25s ease-out;
  -o-transition: margin .25s ease-out;
  transition: margin .25s ease-out;
}

#sidebar-wrapper .sidebar-heading {
  padding: 0.875rem 1.25rem;
  font-size: 1.2rem;
}

#sidebar-wrapper .list-group {
  width: 15rem;
}

#page-content-wrapper {
  min-width: 100vw;
}

#wrapper.toggled #sidebar-wrapper {
  margin-left: 0;
}

@media (min-width: 768px) {
  #sidebar-wrapper {
    margin-left: 0;
  }

  #page-content-wrapper {
    min-width: 0;
    width: 100%;
  }

  #wrapper.toggled #sidebar-wrapper {
    margin-left: -15rem;
  }
}

.material-icons
{
  font-family: 'Material Icons', serif;
}

.material-icons.badge
{
  font-size: 1em;
}

</style>