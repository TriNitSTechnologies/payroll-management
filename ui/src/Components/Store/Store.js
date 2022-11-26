import { configureStore } from "@reduxjs/toolkit";


import loginSlice  from "./LoginSlice";
import offerletterReducer  from "./Offer-LetterSlice";
import payslipReducer  from "./PayslipSlice";

export default  configureStore({
    reducer :{
        login:loginSlice,
        payslip:payslipReducer,
        OfferLetterSlice:offerletterReducer
    }

})