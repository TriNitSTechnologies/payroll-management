import {  createSlice } from "@reduxjs/toolkit"



const initialState ={
  companyData:{
   
  }

}

export const companySlice = createSlice({
    name: 'companyName',
    initialState,
    reducers: {
        initCompanyData:(State,action) =>{
            State.companyData = action.payload;
            
           
        }



    },
    extraReducers(builder) {
       
      }
    
})
export const {initCompanyData} = companySlice.actions;

export default companySlice.reducer;




















