import { configureStore } from "@reduxjs/toolkit";
import { CommentSlice } from "../features/comments/commentsSlice";
import { UsersSlice } from "../features/users/usersSlice";




export const store = configureStore({
    reducer: {
        comments: CommentSlice.reducer,
        user: UsersSlice.reducer
    }
})