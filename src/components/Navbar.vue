<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
    <a class="navbar-brand js-scroll-trigger" href="#page-top">
      <span class="d-block d-lg-none">Start Bootstrap</span>
      <span class="d-none d-lg-block">
        <router-link :to="{ name: 'About', params: {} }" tag="a">
          <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="static/profile.jpeg" alt="">
        </router-link>
      </span>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <router-link :to="{ name: 'Education', params: {} }" class="nav-item" activeClass="active" tag="li">
          <a class="nav-link">Education</a>
        </router-link>
        <router-link :to="{ name: 'Experience', params: {} }" class="nav-item" activeClass="active" tag="li">
          <a class="nav-link">Experience</a>
        </router-link>
        <router-link :to="{ name: 'Work', params: {} }" class="nav-item" activeClass="active" tag="li">
          <a class="nav-link">Work</a>
        </router-link>
        <router-link :to="{ name: 'Blog', params: {} }" class="nav-item" activeClass="active" tag="li">
          <a class="nav-link">Blog</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>

</script>

<style scoped>

</style>
