import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
let username = '';
export const logindata  = createAsyncThunk('user/logindata', async (payload)=>{
    username = payload.username;
    
   return axios.post('https://trinitstechnologies.com/demo/api/v1/user/login',payload)




})

const initialState ={
    username:"",
    isUserLoggedIn:false

}

export const counterSlice = createSlice({
    name: 'username',
    initialState,
    reducers: {
        loginSlice:(State,action) =>{
            State.username = action.payload.username;
            State.isUserLoggedIn = action.payload.isUserLoggedIn
           
        }



    },
    extraReducers(builder) {
        builder.addCase(logindata.fulfilled, (state, action) => {
            state.username = username
            state.isUserLoggedIn=true
           
       
        })
      }
    
})
export const {loginSlice} = counterSlice.actions;

export default counterSlice.reducer;