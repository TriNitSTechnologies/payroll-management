import { configureStore } from "@reduxjs/toolkit";


import loginSlice  from "./LoginSlice";
import offerletterReducer  from "./Offer-LetterSlice";
import payslipReducer  from "./PayslipSlice";

import AppraisalReducer from "./AppraisalSlice"

import appointmentReducer from "./AppointmentSlice";
import relivingletterReduces from "./RelievingSlice";


export default  configureStore({
    reducer :{
        login:loginSlice,
        payslip:payslipReducer,
        Appraisaldata:AppraisalReducer,

        appointment: appointmentReducer,
 
        OfferLetterSlice:offerletterReducer,
        relievingSlices:relivingletterReduces,

        OfferLetterSlice:offerletterReducer


    }

})