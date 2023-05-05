import { createStore } from "vuex";
import { AuthModule } from "@/store/modules/AuthModule";
import { UserModule } from "@/store/modules/UserModule";




const store = createStore({
  modules:{
    auth:AuthModule,
    user:UserModule,
  }
})

export default store