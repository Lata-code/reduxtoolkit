import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,action) {
            state.push(action.payload)
        },
        deleteUser(state, action) {
            state.splice(action.payload,1)
        },
        deleteAllUsers(state, action) {
            return [];
        }
    }
})

console.log(55,userSlice.actions)
export default userSlice.reducer
export const { addUser,deleteUser ,deleteAllUsers} = userSlice.actions;