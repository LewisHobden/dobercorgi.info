<template>
<div class="content dc-homepage-content">
  <div class="dc-header">
    <div>
      <h1>Welcome</h1>
      <p>This is Dobercorgi - a home for the Shulk Discord's resources.</p>
      <p>This project is a work in progress. If you have feedback or suggestions, please get in touch through the Shulk Discord.
      <br />
      In the meantime, add this app to your homescreen to get updates as they are released!</p>

      <nuxt-link class="btn btn-primary dc-btn--cta" to="/resources">Get Started</nuxt-link>
    </div>
    <img class="img-fluid dc-site-logo" src="~assets/icon.png" />
  </div>

  <hr />
</div>
</template>

<style>
.dc-site-logo {
  max-width: 20%;
  padding: 10px;
}

.dc-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

@media (max-width: 480px) {
  .dc-header {
    flex-direction: column-reverse;
  }

  .dc-site-logo {
    max-width: 50%;
    padding: 10px;
  }

  .dc-site-logo {
    margin: 0 auto 30px;
  }

  .dc-header h1 {
    text-align: center;
  }

  .dc-btn--cta {
    display: block;
  }
}
</style>
