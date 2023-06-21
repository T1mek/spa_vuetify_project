<script setup>
import Slider from "@/components/Slider";
import Dashboard from "@/components/Dashboard";

import { computed, onBeforeMount, onMounted, reactive, ref } from "vue";

import { useStore } from "vuex";
import axios from "axios";
import { useDisplay } from "vuetify";
import ProductIntroduction from "@/components/ProductIntroduction.vue";
import SubscriptionInformation from "@/components/SubscriptionInformation.vue";

const store = useStore();
const populars = ref();
const recommendations = ref();
const playlist = async () => {
  const limit = 15;
  const offset = 0;
  // const offset =Math.floor(Math.random()*15);
  const { data: dataPopulars } = await axios.get(
    `https://backend.nextube.ru/api/v1/contents/playlists/popular?limit=${limit}&offset=${offset}`
  );
  const { data: dataRecommendations } = await axios.get(
    `https://backend.nextube.ru/api/v1/contents/playlists/recommendations?limit=${limit}&offset=${offset+2}`
  );
  populars.value = dataPopulars.data;
  recommendations.value = dataRecommendations.data;
};
const { name } = useDisplay();

onBeforeMount(() => {});

onMounted(() => {
  store.dispatch("user/fetchData");
  console.log(populars);
  playlist();
});
</script>

<template>

  <ProductIntroduction/>
<!--  <Slider :sliderContent="populars" />-->
  <v-container fluid style="z-index: 10" class="bg-black">
    <v-row
           :class="name === 'xs' ? `mx-0` : `mx-7`">
      <h6 class="text-white text-h6">ПОПУЛЯРНЫЕ</h6>
      <Dashboard :contents="populars" />
<!--      <h6 class="text-white text-h6 mt-12">РЕКОМЕНДАЦИИ</h6>-->
<!--      <Dashboard :contents="recommendations" />-->
    </v-row>
    <SubscriptionInformation/>
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
