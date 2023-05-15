<script setup>



import { onMounted } from "vue";
import axios from "axios";

const props = defineProps({
  sliderContent:{
    required: true,
    type: Array,
  },
})





</script>

<template>
  <div class="dark">
    <v-carousel height="800px" :show-arrows="false">
      <v-carousel-item
        v-if="sliderContent ? sliderContent.length > 0 : null"
        v-for="content in props.sliderContent"
        :key="content.id"
        :src="`https://nextube.ru/api/v1/files/public/${content.preview['public_key']}`"
        cover
      >
        <div class="d-flex flex-column justify-end ml-10 h-75">
          <h2 class="mt-13 text-white w-75" v-text="content.name"></h2>
          <v-btn
            style="width: 200px; height: 48px"
            class="mt-6 bg-white border-0 text-black"
            rounded="lg"
            variant="outlined"
          >
            Смотреть
          </v-btn>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<style>
.v-carousel__controls {
  position: absolute;
  top: 640px;
  display: flex !important;
  justify-content: start !important;
  background: none !important;
  left: 0 !important;
  right: 0 !important;
  margin-left: 40px;
  color: gray;
}

.dark .v-responsive__content {
  background-image: linear-gradient(to right, #000, transparent);
}
</style>
