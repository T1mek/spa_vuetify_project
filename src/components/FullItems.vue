<template>
  <div class="slider ">
    <div class="d-flex"
         style="gap: 15px;width: 3450px;">
      <v-card
        v-for="(novelty,i) in novelties"
        :key="i"
        class="mt-5 bg-black "
        style=""
      >
        <v-img
          class=" text-white"
          :src="novelty.image"
          cover
          style="height: 400px!important; width: 328px!important;"

        >
          <div class="d-flex flex-column justify-lg-space-between"
               style="height: 400px;">
            <v-card-title
            >Top </v-card-title>
            <v-card-title
              class="d-flex"
              style="font-size: 13px ; padding-right: 8px !important; "
            >
              {{novelty.time}}мин</v-card-title>
          </div>
        </v-img>




      </v-card>
    </div>
  </div>


</template>

<script>
import novelties from '@/novelties.json'
export default {
  data(){
    return{
      novelties:novelties.novelties,
    }
  },
  name: "FullItems"
}
</script>

<style>
.slider{
  overflow-x: auto;
}
.slider::-webkit-scrollbar {
  width: 0;
}

</style>
