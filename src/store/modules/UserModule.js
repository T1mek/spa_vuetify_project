import axios from "axios";

export const UserModule = {
  namespaced: true,

  state: {
    user:[],
    status:''
  },

  getters: {
    USER: (state)=>{
      return state.user
    },
    STATUS:(state)=>{
      return state.status
    }
  },

  mutations: {
    dataUsers(state,data){
      state.user = data.data
      state.status =data.status
    }

  },
  actions: {
    async fetchData({commit}) {
      if(localStorage.getItem('token')){
      const { data } = await axios.get(
        "https://backend.nextube.ru/api/v1/users/profile",
        {
          headers: {
            "X-Session-Token": localStorage.getItem("token"),
          },
        }
      );

        commit('dataUsers',data)
      }
    },
  },
};
