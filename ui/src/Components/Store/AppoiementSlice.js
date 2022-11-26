import { createSlice } from "@reduxjs/toolkit"


const initialState={
    appointment: {

    }
}

export const  AppoiementSlice= createSlice({
name:"Appoiement",
initialState,
reducers:{
    appointment: (state, action)=>{
        state.appointment = action.payload
    }

}

})

export const {appointment} = AppoiementSlice.actions;
export default AppoiementSlice.reducer;