<script setup>

import Navbar from "@/components/Navbar.vue";



</script>





<template>
  <v-app>
    <navbar></navbar>
    <router-view></router-view>
  </v-app>
</template>


<style lang="scss">
.a {
  color: white;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: grey;
  }
}
</style>
