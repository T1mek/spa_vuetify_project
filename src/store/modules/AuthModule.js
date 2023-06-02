import axios from "axios";

export const AuthModule = {
  namespaced: true,
  state: {
    isOpen: false,
  },

  getters: {
  },
  mutations: {

  },

  actions: {
    async register({ commit }, user) {
      const { data } = await axios.post(
        "https://backend.nextube.ru/users/register",
        {
          login:user.email,
          password:user.password,
          name:user.name
        }
      );
      localStorage.setItem("token", data.data.token);
    },
    async logout() {
      localStorage.removeItem("token");
    },
    async login({commit},user) {
      const { data } = await axios.post(
        "https://backend.nextube.ru/users/login",
        {
          login:user.email,
          password:user.password
        }
      )
      localStorage.setItem("token", data.data.token);
    }

  },
};
