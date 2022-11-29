import { configureStore } from "@reduxjs/toolkit";
import loginSlice  from "./LoginSlice";
import payslipReducer  from "./PayslipSlice";
import AppraisalReducer from "./AppraisalSlice"

export default  configureStore({
    reducer :{
        login:loginSlice,
        payslip:payslipReducer,
        Appraisaldata:AppraisalReducer
    }

})