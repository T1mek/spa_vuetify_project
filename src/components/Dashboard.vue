<template>
<div class="slider ">
    <div class="d-flex"
    style="gap: 15px;height: 304px;width: 1750px;">
  <v-card
    v-for="(novelty,i) in novelties"
    :key="i"
    class="mt-5 bg-black "
  >
    <v-img
      class=" text-white"
      :src="novelty.image"
      cover
      style="width: 156px;height: 228px;"
    >
      <div class="d-flex flex-column justify-lg-space-between"
      style="height: 228px;">
      <v-card-title
      >Top </v-card-title>
      <v-card-title
class="d-flex justify-end"
style="font-size: 13px ; padding-right: 8px !important; "
      >
        {{novelty.time}}мин</v-card-title>
      </div>
    </v-img>


    <v-card-text style=" padding: 0!important;"
    >
      <div  style="font-size: 10px ;">{{novelty.title}}</div>

    </v-card-text>
    <v-card-text style="padding: 0!important;" >
      {{novelty.data}} января
    </v-card-text>

  </v-card>
    </div>
</div>


</template>

<script>
import novelties from '@/novelties.json'
export default {
  data(){
    return {
      novelties:novelties.novelties,
    }
  },
  name: "Dashboard",
  methods:{

  }
}
</script>

<style >
v-responsive__sizer{
  border-radius: 20px;
}
.slider{
  overflow-x: auto;
}
.slider::-webkit-scrollbar {
  width: 0;
}
</style>
