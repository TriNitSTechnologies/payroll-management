import { configureStore } from "@reduxjs/toolkit";
import loginSlice  from "./LoginSlice";
import payslipReducer  from "./PayslipSlice";

export default  configureStore({
    reducer :{
        login:loginSlice,
        payslip:payslipReducer
    }

})