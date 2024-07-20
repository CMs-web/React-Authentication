import { createAsyncThunk, createSlice, isPending } from "@reduxjs/toolkit";
import userService from "./userService";

const user = createSlice({
    name: "user",
    initialState: {
        user: null,
        isPending: false,
        isSuccess: false,
        isError : false,
    },
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(getResiter.pending, (state) => {
            state.isPending = true;
            state.isSuccess = false;
            state.isError = false;
        })
    }
})

export const getResiter = createAsyncThunk("REGISTER/USER", async (formdata, thunkAPI) => {
    try {
        return await userService.register(formdata)
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

