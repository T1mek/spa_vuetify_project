<script setup>



const { sliderContent } = defineProps({
  sliderContent:{
    type: Array,
  },
})




</script>

<template>
  <v-container fluid class="dark pa-0" v-if="sliderContent" >
    <v-carousel height="800px" :show-arrows="false" >
      <v-carousel-item
        v-for="content in sliderContent.slice(0,5)"
        :key="content.id"
        :src="`https://backend.nextube.ru/api/v1/files/public/${content.preview['public_key']}`"
        cover

      >
        <v-row class="d-flex flex-column justify-end ml-10 h-75">
          <h2 class="mt-13 text-white w-75">{{content.name}}</h2>
          <v-btn
            style="width: 200px; height: 48px"
            class="mt-6 bg-white border-0 text-black"
            rounded="lg"
            variant="outlined"
          >
            Смотреть
          </v-btn>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </v-container>
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
