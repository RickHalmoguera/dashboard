import { createAsyncThunk } from "@reduxjs/toolkit";
import users from "../../assets/JSON/users.json";

export const getUsersListFromAPIThunk = createAsyncThunk("users/getUsersFromApi", async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(users);
        }, 2000);
    });
})