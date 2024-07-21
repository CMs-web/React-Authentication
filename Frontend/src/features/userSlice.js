import { createAsyncThunk, createSlice, } from "@reduxjs/toolkit";
import userService from "./userService";

const user = createSlice({
    name: "user",
    initialState: {
        user: [],
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
        .addCase(getResiter.fulfilled, (state,action) => {
            state.isPending = false;
            state.isSuccess = false;
            state.isError = false;
            state.user = action.payload
        })
        .addCase(getResiter.rejected, (state,action) => {
            state.isPending = true;
            state.isSuccess = false;
            state.isError = action.payload;
        })
    }
})

export const getResiter = createAsyncThunk("REGISTER/USER", async (formdata, thunkAPI) => {
    try {
        return await userService.register(formdata)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

export default user.reducer

