<script setup>
import { onMounted } from "vue";

const props = defineProps({
  contents: {
    required: true,
  },
});

const getPic = (pic) => {
  const { public_key } = pic.preview;
  return "https://nextube.ru/api/v1/files/public/" + public_key;
};
const getAvatar = (data) => {
  const { avatar } = data.channel;
  return "https://nextube.ru/api/v1/files/public/" + avatar.public_key;
};
const metaData = (data) => {
  const { duration } = data.metadata;
  return new Date(duration * 1000).toISOString().substring(14, 19);
};
const countViews = (data) => {
  const { view } = data.reactions
  return view
}

</script>

<template>
  <div class="slider">
    <div class="d-flex" style="gap: 15px; height: 400px; width: 1750px">
      <v-card
        v-for="content in props.contents"
        :key="content.id"
        style="width: 400px; cursor: pointer"
        class="mt-5 bg-black"
      >
        <v-img
          class="text-white"
          :src="getPic(content)"
          cover
          style="height: 228px"
        >
          <v-card-title
            class="d-flex justify-end align-end h-100"
            style="font-size: 13px"
          >
            <div></div>
            <div
              style="height: 25px"
              class="d-flex justify-center align-center bg-black rounded"
            >
              <span v-text="metaData(content)"></span>
            </div>
          </v-card-title>
        </v-img>

        <v-card-text style="gap: 15px" class="d-flex mt-3 pa-0"
          ><div>
            <v-img
              class="pa-4 bg-secondary rounded-circle d-inline-block"
              :src="getAvatar(content)"
              cover
            />
          </div>
          <v-card-title
            style="width: 357px; white-space: pre-line"
            class="pa-0"
          >
            <h4 v-text="content.name"></h4>
            <p class="font-weight-thin" v-text="content.channel['name']"></p>
            <p class="font-weight-thin"> {{countViews(content)}} Просмотров</p>
          </v-card-title>
        </v-card-text>
      </v-card>
    </div>

  </div>
</template>

<style>
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
