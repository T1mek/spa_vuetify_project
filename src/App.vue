<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <v-app>
    <navbar />
    <router-view></router-view>
    <Footer />
  </v-app>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
//body{
//  background-color: black;
//}

.pointer {
  cursor: pointer;
}
.a {
  color: white;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: grey;
  }
}
</style>
