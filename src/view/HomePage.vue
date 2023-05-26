<script setup>
import Slider from "@/components/Slider";
import Dashboard from "@/components/Dashboard";

import { computed, onBeforeMount, onMounted, reactive, ref } from "vue";

import { useStore } from "vuex";
import axios from "axios";

const store = useStore();
const populars = ref();
const recommendations = ref();
const playlist = async () => {
  const limit = 15;
  const offset = 0;
  // const offset =Math.floor(Math.random()*15);
  const { data: dataPopulars } = await axios.get(
    `https://nextube.ru/api/v1/contents/playlists/popular?limit=${limit}&offset=${offset}`
  );
  const { data: dataRecommendations } = await axios.get(
    `https://nextube.ru/api/v1/contents/playlists/recommendations?limit=${limit}&offset=${offset}`
  );
  populars.value = dataPopulars.data;
  recommendations.value = dataRecommendations.data;
};

onBeforeMount(() => {});

onMounted(() => {
  store.dispatch("user/fetchData");
  console.log(populars);
  playlist();
});
</script>

<template>

  <Slider :sliderContent="populars" />
  <v-container fluid style="z-index: 10" class="bg-black">
    <v-row style="margin-top: -90px" class="mx-6">
      <h6 class="text-white text-h6">ПОПУЛЯРНЫЕ</h6>
      <Dashboard :contents="populars" />
      <h6 class="text-white text-h6 mt-12">РЕКОМЕНДАЦИИ</h6>
      <Dashboard :contents="recommendations" />
    </v-row>
    <!--    <h6 class="text-white text-h6 mt-12">ЭКСКЛЮЗИВЫ</h6>-->
    <!--    <FullItems />-->
    <!--    <h6 class="text-white text-h6 mt-12">АЛЕКСЕЙ СТАХОВИЧ</h6>-->
    <!--    <FullItems />-->

    <!--    <h6 class="text-white text-h6 mt-12">ЛУЧШЕЕ LABELCOM</h6>-->
    <!--    <Dashboard />-->
    <!--    <h6 class="text-white text-h6 mt-12">РЕПОРТАЖ</h6>-->
    <!--    <Dashboard />-->
    <!--    <h6 class="text-white text-h6 mt-12">ФИЛИПП ВОРОНИН</h6>-->
    <!--    <FullItems />-->
    <!--    <h6 class="text-white text-h6 mt-12">НА СПОРТИВНОМ</h6>-->
    <!--    <Dashboard />-->
  </v-container>

</template>

<style></style>
