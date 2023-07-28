<template>
  <div>
  <b-navbar toggleable="lg" type="light" variant="info">
    <b-navbar-brand><img src="../assets/logo.png" alt="Petrografix Mineral" class="navbar-brand navbar-logo" ></b-navbar-brand>

    <b-navbar-toggle @click="store.setAnimatedText(false)" target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto right-nav-items">
        <b-nav-item>
          <router-link style="text-decoration: none; color: inherit;" to="/">Home</router-link>
          </b-nav-item>
        <b-nav-item><router-link style="text-decoration: none; color: inherit;" to="/services">Services</router-link>
          </b-nav-item>
        <b-nav-item>
          <router-link style="text-decoration: none; color: inherit;" to="/about">About</router-link>
        </b-nav-item>
        <b-nav-item>
        <router-link style="text-decoration: none; color: inherit;" to="/portfolio">Portfolio</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link style="text-decoration: none; color: inherit;" to="/contact-us">Contact Us</router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import { store } from '../store.js'

export default {
  name: 'NavBar',
  data() {
    return {
      store
    }
  }
}
</script>

<style scoped>
.navbar-logo {
  /* height: 5%; */
  width: 65%;
}
/* h3 {
  margin: 40px 0 0;
} */
/* ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
} */
/* a {
  color: #011b27;
} */
/* li:hover{
  background-color: #4a9cc2;
} */
/* a:hover {
  background-color: #4a9cc2;
} */


.navbar {
     background: #ffffff !important;
     font-weight:bold ;
 }

 .nav-item::after {
     content: '';
     display: block;
     width: 0px;
     height: 2px;
     background: #188bbc;
     transition: 0.4s
 }

 .nav-item:hover::after {
     width: 100%
 }

 .navbar-light .navbar-nav .active>.nav-link,
 .navbar-light .navbar-nav .nav-link.active,
 .navbar-light .navbar-nav .nav-link.show,
 .navbar-light .navbar-nav .show>.nav-link,
 .navbar-light .navbar-nav .nav-link:focus,
 .navbar-light .navbar-nav .nav-link:hover {
     color: #188bbc;
 }

 .nav-link {
     padding: 25px 5px;
     transition: 0.2s
 }
</style>
