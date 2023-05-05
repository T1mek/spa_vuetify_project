<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { email, required } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();

const state = reactive({
  email: "",
  password: "",
});
const rules = {
  email: { required, email },
  password: { required },
};
const v$ = useVuelidate(rules, state);

const handleLogin = () => {
  store.dispatch("auth/login", state).then(() => {
    router.push("/");
  });
};
</script>

<template>
  <div class="bg-black h-100">
    <div style="margin-top: 350px" class="d-flex justify-center">
      <form @submit.prevent="handleLogin" class="w-50 bg-white rounded-lg">
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
          <p>
            Вы еще не зарегистрировались?
            <router-link to="/register">Вам сюда</router-link>
          </p>
        </div>
        <div class="d-flex justify-space-between mt-7">
          <v-btn style="color: black" @click="router.push('/')"> Назад </v-btn>
          <v-btn type="submit" style="color: black" @click="v$.$validate">
            Войти
          </v-btn>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
