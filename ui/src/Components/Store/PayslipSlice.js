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
































// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     paySlipData: {
//         employeeData: {},
//         companyDetails: {}
//     }
// }
// let PayslipSlice = createSlice({
//     name: 'payslip',
//     initialState: initialState,
//     reducers: {
//         initPayslipData: (state, action) => {
//             state.paySlipData = action.payload;


//         }
//     }, extraReducers(builder) {

//     }

// })
// export const { initPayslipData } = PayslipSlice.actions;
// // export default userDataslice.reducer;
// export default PayslipSlice.reducer;