import { createSlice } from "@reduxjs/toolkit";
import { getUsersListFromAPIThunk } from "./usersThunk";


export const UsersSlice = createSlice({
    name: "users",
    initialState:{
        data: [],
        status: "idle",
        error: null
    },   
    reducers:{
       // getElementById: (state,action) => state.data.filter((room) => room.id === action.payload),
       // addRoomElement: (state,action) => {
       //     state.data = [action.payload,...state.data]
       // }
    },
    extraReducers: (builder) => {
        builder.addCase(getUsersListFromAPIThunk.fulfilled, (state,action) => {
            state.status = "fulfilled"
            state.data = action.payload
        })
        builder.addCase(getUsersListFromAPIThunk.rejected,(state,action)  => {
            state.status = "rejected"
            console.log(action)
            state.error = action.error.message
        })
        builder.addCase(getUsersListFromAPIThunk.pending,(state,action)  => {
            state.status = "pending"
        })
    }
});

export const getUsersData = state => state.users.data
export const getUsersStatus = state => state.users.status
export const getUsersError = state => state.users.error