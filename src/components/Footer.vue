<template>
  <v-footer
    style="background-color: #1a1a1a; max-height: 70px">
    <div class="d-flex w-100 align-center px-7 py-2">
      <strong class="text-white"
        >Copyright © 2022 - {{ new Date().getFullYear() }} Nextube</strong
      >
      <a
        class="text-decoration-none text-grey ml-3"
        href="https://docs.nextube.ru/docs/"
      >
        Правовые документы</a
      >
      <v-spacer></v-spacer>
      <a href="https://t.me/nextubebot" class="d-flex">
        <img key="icon" width="20" class="pointer" :src="tg" />
      </a>
    </div>
  </v-footer>
</template>

<script setup>
import { useDisplay } from "vuetify";
import tg from "../assets/image/Telegram_logo.svg";
</script>

<style scoped></style>
