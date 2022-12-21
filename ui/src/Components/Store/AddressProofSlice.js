import { createSlice } from "@reduxjs/toolkit"


const initialState={
    addressProof: {

    }
}

export const  AddressProofSlice= createSlice({
name:" AddressProof",
initialState,
reducers:{
    Application:(state, action)=>{
        state.addressProof = action.payload
    }

}

})

export const {Application} = AddressProofSlice.actions;
export default AddressProofSlice.reducer;