<template>
<div class="main-content">
  <div class="d-flex" id="wrapper" v-bind:class="{ toggled: !showMenu }">
    <!-- Page Content -->
    <div id="page-content-wrapper">
        <b-navbar class="sticky-top" toggleable="sm" type="light" variant="light">
          <b-navbar-brand href="/">Dobercorgi</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item to="/" right>Home</b-nav-item>
              <b-nav-item to="/resources" right>Resources</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
        <nuxt />
    </div>
    <!-- /#page-content-wrapper -->

  <SiteFooter />    
  </div>
</div>
<!-- /#wrapper -->
</template>

<script>
import SiteFooter from '~/components/SiteFooter.vue'

export default {
  computed: {
    showMenu () {
      return this.$store.state.showMenu
    }
  },
  components: {
    SiteFooter
  },
  methods: {
    toggleMenu(e) {
      this.$store.commit("TOGGLE_MENU");
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

.main-content {
  margin-bottom: 20px;
}
</style>
