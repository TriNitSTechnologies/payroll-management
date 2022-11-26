import { configureStore } from "@reduxjs/toolkit";


import loginSlice  from "./LoginSlice";
import offerletterReducer  from "./Offer-LetterSlice";
import payslipReducer  from "./PayslipSlice";
import appoiementReducer from "./AppoiementSlice";

export default  configureStore({
    reducer :{
        login:loginSlice,
        payslip:payslipReducer,
        appoiement: appoiementReducer
        OfferLetterSlice:offerletterReducer
    }

})