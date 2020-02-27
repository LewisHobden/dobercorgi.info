<template>
  <div class="dc-footer bg-light d-flex justify-content-between">
    <div class="dc-credit">
      <span>&copy; Shulk Discord</span><br />
      <span class="dc-version">Version: 1.0.0</span>
    </div>
    <div>
      <div class="btn-group">
        <a href="https://twitter.com/ShulkDiscord" target="_blank" class="btn btn-secondary">Twitter</a>
        <a href="https://discordapp.com/invite/NpXtA3f" target="_blank" class="btn btn-secondary">Discord</a>
      </div>
      </div>
  </div>
</template>

<style>
.dc-footer {
  padding: 20px 20% 20px;
  font-size: 12px;
}

.dc-version {
  color: #969090;
  font-size: 10px;
}

@media (max-width: 480px) {
  .dc-footer {
    padding: 20px 20px 20px;
  }
}
</style>