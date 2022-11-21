import { configureStore } from "@reduxjs/toolkit";
import loginSlice  from "./LoginSlice";


export default configureStore({
    reducer :{
        login:loginSlice
    }

})