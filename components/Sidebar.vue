<template>
     <!-- Sidebar -->
    <div class="bg-light border-right" id="sidebar-wrapper">
        <div class="sidebar-heading">Shulk Discord Resources</div>
        <div class="list-group list-group-flush">
            <a href="javascript:;" v-on:click="changeActive" data-active="links" class="list-group-item list-group-item-action">Links<span class="material-icons badge badge-pill">Links</span></a>
            <a href="javascript:;" v-on:click="changeActive" data-active="guides" class="list-group-item list-group-item-action">Guides<span class="material-icons badge badge-pill">Guides</span></a>
        </div>
    </div>
    <!-- /#sidebar-wrapper -->
</template>

<script>
export default {
  methods: {
    changeActive(e) {
      this.$state.commit("TOGGLE_ACTIVE",e.target.data("active"));
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
</style>