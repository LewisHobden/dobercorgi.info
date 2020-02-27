<template>
<div class="content dg-homepage-content">
  <div class="dg-header">
    <div>
      <h1>Welcome</h1>
      <p>This is Dobercorgi - a home for the Shulk Discord's resources.</p>
      <p>This project is a work in progress. If you have feedback or suggestions, please get in touch through the Shulk Discord.
      <br />
      In the meantime, add this app to your homescreen to get updates as they are released!</p>

      <nuxt-link class="btn btn-primary dg-btn--cta" to="/resources">Get Started</nuxt-link>
    </div>
    <img class="img-fluid dg-site-logo" src="~assets/icon.png" />
  </div>

  <hr />
</div>
</template>

<style>
.dg-site-logo {
  max-width: 20%;
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
    max-width: 50%;
    padding: 10px;
  }

  .dg-site-logo {
    margin: 0 auto 30px;
  }

  .dg-header h1 {
    text-align: center;
  }

  .dg-btn--cta {
    display: block;
  }
}
</style>
