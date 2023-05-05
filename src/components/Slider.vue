<template>
  <div class="dark">
    <v-carousel height="800px" :show-arrows="false">
      <v-carousel-item
        v-for="(card, i) in cards"
        :key="i"
        :src="card.image"
        cover
      >
        <div class="d-flex flex-column justify-end ml-10 h-75">
          <img style="height: 90px; width: 120px" :src="card.logo" alt="sds" />
          <h2 class="mt-13 text-white" style="color: red">{{ card.title }}</h2>
          <p class="mt-3 text-grey" style="color: red">{{ card.text }}</p>
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

<script>

import item from "../items.json";

export default {
  data() {
    return {
      cards: item.items,
    };
  },
  name: "Slider",
  components: {},
  methods: {},
};
</script>

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
