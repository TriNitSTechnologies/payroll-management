import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
let username = '';
export const logindata  = createAsyncThunk('user/logindata', async (payload)=>{
    username = payload.username;
    console.log( "ddd " +payload.username)
   return axios.post('https://trinitstechnologies.com/demo/api/v1/user/login',payload)




})

const initialState ={
    username:"",
    islogdin:false

}

export const counterSlice = createSlice({
    name: 'username',
    initialState,
    reducers: {
        loginSlice:(State,action) =>{
            State.username = action.payload.username;
            State.islogdin = action.payload.islogdin
           
        }



    },
    extraReducers(builder) {
        builder.addCase(logindata.fulfilled, (state, action) => {
            state.username = username
            state.islogdin=true
            console.log("fgg "+state.username);
        //   return action.payload;
        })
      }
    
})
export const {loginSlice} = counterSlice.actions;

export default counterSlice.reducer;