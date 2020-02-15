<template>
  <div class="d-flex main-content" id="wrapper" v-bind:class="{ toggled: !showMenu }">
    <sidebar />

    <!-- Page Content -->
    <div id="page-content-wrapper">
    
    <b-navbar toggleable="lg" type="light" variant="light">
      <button id="sidebar-toggle" class="btn btn-outline-info" v-on:click="toggleMenu">{{ getToggleCopy() }}</button>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/" right>Home</b-nav-item>
          <b-nav-item to="/resources" active right>Resources</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
        <nuxt />
    </div>
    <!-- /#page-content-wrapper -->
    <SiteFooter />
</div>
<!-- /#wrapper -->
</template>

<script>
import Sidebar from '~/components/Sidebar.vue'
import SiteFooter from '~/components/SiteFooter.vue'

export default {
  computed: {
    showMenu () {
      return this.$store.state.showMenu
    }
  },
  components: {
    Sidebar, SiteFooter
  },
  methods: {
    toggleMenu(e) {
      this.$store.commit("TOGGLE_MENU");
    },
    getToggleCopy() {
      return (this.showMenu ? "Show" : "Hide") + " categories";
    }
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

#page-content-wrapper {
  margin-bottom: 30px;
}

@media(min-width: 480px) {
  #sidebar-toggle {
    display: none;
  }
}
</style>
