<template>
  <v-app>
    <Slider/>

    <div
      style="z-index: 10"
      class="pl-11 bg-black">
        <div style="margin-top: -90px; min-height: 332px">
        <h6 class="text-white text-h6">НОВИНКИ</h6>
        <Dashboard />
        </div>
      <h6 class="text-white text-h6 mt-12">ЭКСКЛЮЗИВЫ</h6>
      <FullItems />
      <h6 class="text-white text-h6 mt-12">АЛЕКСЕЙ СТАХОВИЧ</h6>
      <FullItems />
      <h6 class="text-white text-h6 mt-12">НЕ ЗНАЮ, ЧТО ПОСМОТРЕТЬ</h6>
      <Dashboard />
      <h6 class="text-white text-h6 mt-12"> ЛУЧШЕЕ LABELCOM</h6>
      <Dashboard />
      <h6 class="text-white text-h6 mt-12"> РЕПОРТАЖ</h6>
      <Dashboard />
      <h6 class="text-white text-h6 mt-12">ФИЛИПП ВОРОНИН</h6>
      <FullItems />
      <h6 class="text-white text-h6 mt-12">НА СПОРТИВНОМ</h6>
      <Dashboard />


    </div>



  </v-app>
</template>

<script>

  import Slider from "@/components/Slider";
  import Dashboard from "@/components/Dashboard";
  import FullItems from '@/components/FullItems'
  export default {

    name:'aa',
    components:{
      Slider,Dashboard,FullItems
    }
  }
</script>

<style>
body{
  background: black;

}



</style>
