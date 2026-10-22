<template>
  <div class="main-content">
    <div id="wrapper" class="d-flex">
      <!-- Page Content -->
      <div id="page-content-wrapper">
        <SiteNavbar class="sticky-top" expand="sm">
          <NuxtLink class="navbar-brand" to="/">Dobercorgi</NuxtLink>
        </SiteNavbar>
        <slot />
      </div>
      <!-- /#page-content-wrapper -->
    </div>
    <SiteFooter />
  </div>
  <!-- /#wrapper -->
</template>
