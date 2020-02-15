<template>
<div class="content dg-homepage-content">
  <div class="dg-header">
    <div>
      <h1>Welcome</h1>
      <p>Welcome to Dobercorgi - a home for the Shulk Discord's resources.</p>
      <nuxt-link class="btn btn-primary" to="/resources">Get Started</nuxt-link>
    </div>
    <img class="img-fluid img-thumbnail dg-site-logo" src="~assets/icon.png" />
  </div>

  <hr />
  

</div>
</template>

<script>
export default {
  
}
</script>

<style>
.dg-site-logo {
  max-width: 150px;
  padding: 10px;
}

.dg-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

@media (max-width: 480px) {
  .dg-header {
    flex-direction: column-reverse;
  }

  .dg-site-logo {
    margin: 0 auto 30px;
  }

  .dg-header h1 {
    text-align: center;
  }
}

.dg-homepage-content {
  margin: 0 20%;
}
</style>
