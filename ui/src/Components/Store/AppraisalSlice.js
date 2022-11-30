import { createSlice } from "@reduxjs/toolkit";

const initialState={
   Appraisalletter:{
   }
}


export const AppraisalSlice = createSlice({
    name:'Appusername',
    initialState,
    reducers:{
        AppraisalStatus:(state,action)=>{
            state.Appraisalletter = action.payload
        }

    }
})

export const{AppraisalStatus} = AppraisalSlice.actions
export default AppraisalSlice.reducer