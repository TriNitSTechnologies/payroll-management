import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./LoginSice";


export let Store = configureStore({
    reducer :{
        login:loginSlice
    }

})