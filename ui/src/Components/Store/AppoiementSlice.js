import { createSlice } from "@reduxjs/toolkit"


const initialState={
    appoienment: {

    }
}

export const  AppoiementSlice= createSlice({
name:"Appoiement",
initialState,
reducers:{
    appoienment: (state, action)=>{
        state.appoienment = action.payload
    }

}

})

export const {appoienment} = AppoiementSlice.actions;
export default AppoiementSlice.reducer;