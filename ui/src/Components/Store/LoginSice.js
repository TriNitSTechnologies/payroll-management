import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const logindata=createAsyncThunk('user/logindata',async (payload)=>{

    axios.post('https://trinitstechnologies.com/demo/api/v1/user/login',payload).then((Response) =>{

    console.log(Response)
    }).catch(error=>{
        console.log(error)
    })



})

const initialState ={
    username:""

}

export const counterSlice = createSlice({
    name: 'username',
    initialState,
    reducers: {
        loginSlice:(State,action) =>{
            State.username=action.payload
        }



    },
    extraReducers(builder) {
        builder.addCase(logindata.fulfilled, (state, action) => {
          console.log(action.payload);
          state.users = state.users.concat(action.payload)
          return action.payload;
        })
      }
    
})
export const {loginSlice} = counterSlice.actions;

export default counterSlice.reducer;