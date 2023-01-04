import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
const initialState={
    relivingletter:{
 }  
}
export   const RelievingSlicees=createSlice({
 name:"Relivingletter",
 initialState,
 reducers:{
    relievingSlices:(State,action) => {
         State.relivingletter = action.payload;
 }

 },
 
});
export const {relievingSlices} = RelievingSlicees.actions;

export default RelievingSlicees.reducer;






