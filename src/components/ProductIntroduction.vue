<script setup>
import note from "../assets/image/note.svg";
import { ref } from "vue";
const icons = ref([
  {
    icon: "mdi-video-4k-box",
    size: "80",
    text: "Высокое качество видео",
    color: "#FFA726",
  },
  {
    icon: "mdi-picture-in-picture-bottom-right-outline",
    size: "80",
    text: "Картинка в картинке",
    color: "#FFA726",
  },
  {
    icon: "mdi-collapse-all-outline",
    size: "80",
    text: "Прослушивание в фоне",
    color: "#FFA726",
  },
]);
</script>

<template>
  <v-container fluid class="bg-black px-7 pt-16">
    <v-row>
      <v-row align="center">
        <v-col class="text-center">
          <h2 class="text-h3">Представляем вам Nextube</h2>
          <p class="mt-8 text-h5 text-h5">
            Современная платформа для монетизации контента
          </p>
          <v-btn rounded width="300" height="60" class="bg-blue text-h5 mt-12"
            >Попробывать</v-btn
          >
        </v-col>
      </v-row>
      <v-img width="300" height="500" :src="note"> </v-img>
    </v-row>
    <v-row align="center" class="mt-10">
      <v-container class="w-75 d-flex justify-center">
        <v-row v-for="icon in icons" :key="icon.text" class="ma-0">
          <div class="d-flex align-center">
            <v-icon
              :color="icon.color"
              :size="icon.size"
              :icon="icon.icon"
            ></v-icon>
            <p class="ml-3">{{ icon.text }}</p>
          </div>
        </v-row>
      </v-container>
    </v-row>
  </v-container>
</template>

<style scoped></style>
