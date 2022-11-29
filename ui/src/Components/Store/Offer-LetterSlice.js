import { createSlice } from "@reduxjs/toolkit";



const initialState ={
    offerletter : {

    }
}
export const OfferLetter = createSlice  ({

    name:"Offer Letter",
    initialState,
    reducers:{
        offerletterReducer:(state ,action) =>{
            state.offerletter = action.payload
        }
    }

   
})
export const {offerletterReducer} = OfferLetter.actions;
export default OfferLetter.reducer;




