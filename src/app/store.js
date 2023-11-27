import { configureStore } from "@reduxjs/toolkit";
import { CommentSlice } from "../features/comments/commentsSlice";




export const store = configureStore({
    reducer: {
        comments: CommentSlice.reducer
    }
})