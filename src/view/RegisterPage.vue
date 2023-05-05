<script setup>
import { mapState, useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed, onMounted, reactive } from "vue";
import useVuelidate from "@vuelidate/core";
import { email, required } from "@vuelidate/validators";

const store = useStore();
const props = defineProps({
  isOpen: {
    type: Boolean,
  },
});
const router = useRouter();

const state = reactive({
  name: "",
  email: "",
  password: "",
});
const rules = {
  name: { required },
  email: { required, email },
  password: { required },
};
const v$ = useVuelidate(rules, state);

const handleLogin = () => {
  store.dispatch("auth/register", state).then(() => {
    router.push('/')
  });
};
onMounted(() => {});
</script>

<template>
  <div class="bg-black h-100">
    <div style=" margin-top: 350px" class="d-flex justify-center">
      <form @submit.prevent="handleLogin" class="w-50 bg-white rounded-lg ">
        <v-text-field
          v-model="state.name"
          :error-messages="v$.name.$errors.map((e) => e.$message)"
          label="Имя"
          required
          @input="v$.name.$touch"
          @blur="v$.name.$touch"
        ></v-text-field>

        <v-text-field
          v-model="state.email"
          :error-messages="v$.email.$errors.map((e) => e.$message)"
          label="E-mail"
          required
          @input="v$.email.$touch"
          @blur="v$.email.$touch"
        ></v-text-field>

        <v-text-field
          v-model="state.password"
          :error-messages="v$.password.$errors.map((e) => e.$message)"
          label="Пароль"
          required
          @input="v$.password.$touch"
          @blur="v$.password.$touch"
        ></v-text-field>
        <div class="d-flex justify-center">
          <p>Вы уже зарегистрированы? <router-link  to="/login">Войти</router-link> </p>
        </div>
        <div class= "d-flex justify-space-between mt-7">
          <v-btn style="color: black" @click="router.push('/')"> Назад </v-btn>
          <v-btn
            type="submit"
            style="color: black" @click="v$.$validate">
            Зарегитсрироватся
          </v-btn>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
