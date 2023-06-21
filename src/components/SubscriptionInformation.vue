<script setup>
import { ref } from "vue";

const jobsInformation = ref([
  "Для просмотра контента, пользователь оформляет платную ежемесячную подписку. Стоимость подписки на канал автор выбирает сам",
  " Автор, в свою очередь, радует пользователей эксклюзивным контентом",
  "Так же есть возможность совершения единоразовых донатов",
]);
</script>

<template>
  <v-row justify="center" class="mb-15">
    <v-container style="border: 7px solid #ffa726" class="rounded-xl">
      <h2 class="text-center text-h3">
        Потребляй контент – поддерживай автора
      </h2>
      <v-row>
        <v-col class="mt-8 px-7 w-50">
          <h3>Платформа работает по модели монетизации Patreon:</h3>
          <ul
            v-for="(info, index) in jobsInformation"
            :key="index"
            style="list-style-type: none"
            class="mt-5"
          >
            <li>{{ info }}</li>
          </ul>
        </v-col>
        <v-row align-content="center" justify="center" class="w-0 ma-0">
          <v-row  class="text-center ma-0" >
            <v-col class="text-h4">
            <h4 >Цена нашей подписки всего:</h4>
            <p class="mt-5 text-h2 font-weight-bold">299₽</p>
            </v-col>
          </v-row>
        </v-row>
      </v-row>
    </v-container>
  </v-row>
</template>

<style scoped></style>
