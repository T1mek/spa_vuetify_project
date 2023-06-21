<script setup>
import { computed, onBeforeMount, onMounted, reactive, ref, render, watch } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
const route = useRoute()
const store = useStore();
const router = useRouter();
const user = computed(() => store.getters["user/USER"]);
const bg = ref('')

const changeColorNavbar = ()=>{
  if (document.documentElement.scrollTop>30){
    bg.value ="backdrop-filter:blur(24px)"
  }
  else {
    bg.value = "none"
  }
}


const items = [{ title: "Профиль" }, { title: "Выйти" }];
const changePage = (title) => {
  if (title === "Профиль") {
    router.push("/profile");
  }
  // if (route.fullPath === 'profile'){
  //  items.unshift()
  //  items.shift({title: 'Редактировать'})
  // }
  if (title === "Выйти") {
    const logout ={
      data:[],
      success:''
    }
    store.dispatch("auth/logout");
    store.commit('user/dataUsers',logout);
  }
};


onMounted(()=>{
  window.addEventListener('scroll',changeColorNavbar)
})
</script>

<template>
  <v-app-bar app dark flat color="transparent" height="80" :style="bg">
    <v-container class="d-flex align-center justify-lg-space-between ml-6">
      <router-link to="/" class="pointer d-flex text-decoration-none">
        <img src="@/assets/image/logo.jpeg" alt="Logo" style="border-radius: 10px" width="46" />
        <h1 class="ml-2 text-white" >NEXTUBE</h1>
      </router-link>
<!--      <router-link class="a" to="/">Главная</router-link>-->
<!--      <a class="a">Шоу</a>-->
    </v-container>
<!--    <v-spacer></v-spacer>-->
<!--    <v-card-->
<!--      style="border: 1px solid white; height: 30px; width: 220px"-->
<!--      color="transparent"-->
<!--      class="mx-auto rounded-pill"-->
<!--    >-->
<!--      <v-text-field-->
<!--        variant="solo"-->
<!--        bg-color="transparent"-->
<!--        density="compact"-->
<!--        placeholder="Поиск"-->
<!--        prepend-inner-icon="mdi-magnify"-->
<!--        hide-details-->
<!--        type="text"-->
<!--      ></v-text-field>-->
<!--    </v-card>-->
<!--    <div v-if="user.name" class="mr-13 ml-9">-->
<!--      <img v-if="user.image" src="" alt="" />-->
<!--      <v-btn id="menu-activator" color="white">-->
<!--        {{ user.name }}-->
<!--      </v-btn>-->
<!--      <v-menu activator="#menu-activator">-->
<!--        <v-list>-->
<!--          <v-list-item-->
<!--            v-for="(item, index) in items"-->
<!--            :key="index"-->
<!--            :value="index"-->
<!--          >-->
<!--            <v-list-item-title @click="changePage(item.title)">{{-->
<!--              item.title-->
<!--            }}</v-list-item-title>-->
<!--          </v-list-item>-->
<!--        </v-list>-->
<!--      </v-menu>-->
<!--    </div>-->
<!--    <router-link v-else to="/register" class="a mr-13 ml-9">-->
<!--      Войти-->
<!--    </router-link>-->
  </v-app-bar>
</template>

<style>
.v-field__prepend-inner > .v-icon,
.v-field__append-inner > .v-icon,
.v-field__clearable > .v-icon,
v-field__input {
  opacity: 1;
  color: white;
}
.v-field__prepend-inner {
  padding-top: 5px;
}
.v-field__input {
  padding-top: 0;
}
</style>
