import { createSlice } from "@reduxjs/toolkit";
import { getCommentsListFromAPIThunk } from "./commentsThunk";

export const CommentSlice = createSlice({
    name: "comments",
    initialState:{
        data: [],
        status: "idle",
        error: null
    },   
    reducers:{
       
        changeCommentStatus: (state,action)=>{
            const commentToArchive = action.payload
            const updatedStatus = state.data.map((item)=> item.id === commentToArchive ? {...item,is_archived:!item.is_archived} : item) 
            state.data = updatedStatus 
        }
       // getElementById: (state,action) => state.data.filter((room) => room.id === action.payload),
       // addRoomElement: (state,action) => {
       //     state.data = [action.payload,...state.data]
       // }
    },
    extraReducers: (builder) => {
        builder.addCase(getCommentsListFromAPIThunk.fulfilled, (state,action) => {
            state.status = "fulfilled"
            state.data = action.payload
        })
        builder.addCase(getCommentsListFromAPIThunk.rejected,(state,action)  => {
            state.status = "rejected"
            console.log(action)
            state.error = action.error.message
        })
        builder.addCase(getCommentsListFromAPIThunk.pending,(state,action)  => {
            state.status = "pending"
        })
    }
});

export const {changeCommentStatus} = CommentSlice.actions
export const getCommentsData = state => state.comments.data
export const getCommentsStatus = state => state.comments.status
export const getCommentsError = state => state.comments.error