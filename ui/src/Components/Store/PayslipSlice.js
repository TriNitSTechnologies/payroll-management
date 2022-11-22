import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const initialState ={
  payslipData:{
    employeeData:{},
    companyDetails:{}
  }

}

export const payslipSlice = createSlice({
    name: 'payslip',
    initialState,
    reducers: {
        initpayslipData:(State,action) =>{
            State.payslipData = action.payload;

           
        }



    },
    extraReducers(builder) {
       
      }
    
})
export const {initpayslipData} = payslipSlice.actions;

export default payslipSlice.reducer;
































