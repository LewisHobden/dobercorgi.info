<template>
<div>
  <div class="d-flex" id="wrapper" v-bind:class="{ toggled: !showMenu }">
    <!-- Page Content -->
    <div id="page-content-wrapper">
        <b-navbar toggleable="sm" type="light" variant="light">
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

    <div class="dg-footer bg-light fixed-bottom d-flex justify-content-between">
      <span>Theme: <button type="button" onclick="alert('Not yet implemented')" class="btn btn-light">Light</button></span>
      <div class="btn-group">
        <a href="https://twitter.com/ShulkDiscord" target="_blank" class="btn btn-secondary">Twitter</a>
        <a href="https://discordapp.com/invite/NpXtA3f" target="_blank" class="btn btn-secondary">Discord</a>
       </div>
    </div>
  </div>
</div>
<!-- /#wrapper -->
</template>

<script>
export default {
  computed: {
    showMenu () {
      return this.$store.state.showMenu
    }
  },
  methods: {
    toggleMenu(e) {
      this.$store.commit("TOGGLE_MENU");
    }
  }
}
</script>

<style>
.dg-footer {
  padding: 20px 20% 20px;
}

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

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

@media (max-width: 480px) {
  .dg-footer {
    padding: 20px 20px 20px;
  }
}
</style>
