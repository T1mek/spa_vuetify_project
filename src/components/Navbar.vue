<template >
      <v-app-bar app dark flat
        color="transparent"
                 
      >

    <v-container
  class="w-25 d-flex align-center justify-lg-space-between ml-6" >
  <img src="@/assets/image/logo.svg" alt="Logo" style="cursor: pointer">
 <p class="text-white" style="cursor: pointer">Главная</p>
  <p class="text-white" style="cursor: pointer">Шоу</p>
        </v-container>
        <v-spacer></v-spacer>
        <v-card
          class="mx-auto rounded-pill  "
          width="300"
        >
            <v-text-field
              density="compact"
              placeholder="Поиск"
              prepend-inner-icon="mdi-magnify"
              hide-details
              type="text"
            ></v-text-field>
        </v-card>
        <v-btn>
          <p class="text-white">Войти</p>
        </v-btn>
      </v-app-bar>


</template>

<script>

export default {
  data: () => ({


  })
}
</script>

