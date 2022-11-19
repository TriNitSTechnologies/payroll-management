import { configureStore } from "@reduxjs/toolkit";
import loginSlice  from "./LoginSice";


export default configureStore({
    reducer :{
        login:loginSlice
    }

})