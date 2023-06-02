<script setup>
import { computed, onMounted, reactive, ref } from "vue";
import PluralHelper from "../helpers/PluralHelper";
import { useDisplay } from "vuetify";

const props = defineProps({
  contents: {
    required: true,
  },
});

const getPic = (pic) => {
  const { public_key } = pic.preview;
  return "https://backend.nextube.ru/api/v1/files/public/" + public_key;
};
const getAvatar = (data) => {
  const { avatar } = data.channel;
  return "https://backend.nextube.ru/api/v1/files/public/" + avatar.public_key;
};
const metaData = (data) => {
  const { duration } = data.metadata;
  return new Date(duration * 1000).toISOString().substring(14, 19);
};
const countViews = (data) => {
  const { view } = data.reactions;
  return view;
};
const { name } = useDisplay();



onMounted(() => {


});
</script>

<template>
  <v-container fluid class="slider d-flex">
    <!--<div class="d-flex" style="gap: 15px; height: 400px; width: 1750px">-->
    <v-card
      v-for="content in props.contents"
      :key="content.id"
      :min-width="name === 'xs' ? 360: 400"
      :min-height="700"
      class="d-flex bg-black"
      style="gap: 25px"
    >
      <v-row>
        <v-col v-for="n in 2" :key="n" cols="12" class="pt-0 mb-7 pointer ">
          <v-img
            class="text-white h-50 "
            :src="getPic(content)"
            cover
            alt="Content"
          >
            <v-container class="h-100 d-flex justify-end align-end">
              <!--   class="d-flex justify-center align-center bg-black rounded w-25 h-25"-->
              <span class="text-h6 bg-black">{{ metaData(content) }}</span>
            </v-container>
          </v-img>

          <v-card-title class="d-flex">
            <v-img
              class="bg-secondary rounded-circle mt-3"
              :src="getAvatar(content)"
              cover
              alt="Avatar"
              height="36"
              max-width="36"
            />
            <v-col class="w-75 pr-0">
              <h4 class="text-wrap">{{ content.name }}</h4>
              <p class="font-weight-thin">{{ content.channel["name"] }}</p>
              <v-row class="d-flex px-0 pl-3 mt-0">
                <p class="font-weight-thin">
                  {{ PluralHelper.watchCount(countViews(content)) }}
                </p>
                <p class="font-weight-thin dot">
                  {{ PluralHelper.timeAgo(content.creation_date) }}
                </p>
              </v-row>
            </v-col>
          </v-card-title>

          <!--        <v-card-text style="gap: 15px" class="d-flex mt-3 pa-0"-->
          <!--          ><div>-->
          <!--            <v-img-->
          <!--              class="pa-4 bg-secondary rounded-circle d-inline-block"-->
          <!--              :src="getAvatar(content)"-->
          <!--              cover-->
          <!--            />-->
          <!--          </div>-->
          <!--          <v-card-title class="pa-0">-->
          <!--            <h4 class="">{{ content.name }}</h4>-->
          <!--            <p class="font-weight-thin" v-text="content.channel['name']"></p>-->
          <!--            <p class="font-weight-thin">{{ countViews(content) }} Просмотров</p>-->
          <!--          </v-card-title>-->
          <!--        </v-card-text>-->
        </v-col>
      </v-row>
    </v-card>

    <!--</div>-->
  </v-container>
</template>

<style scoped>
.dot::before {
  content: "•";
  margin: 0 4px;
}
v-responsive__sizer {
  border-radius: 20px;
}
.slider {
  overflow-x: auto;
}
.slider::-webkit-scrollbar {
  width: 0;
}
</style>