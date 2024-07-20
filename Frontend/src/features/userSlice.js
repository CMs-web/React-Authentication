import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {},
        isEnter : false,
        isLoggedIn: true,
        isSignIn: true,
        isLoding: false,
        isError: false,
        isSuccess: false,
    },
    reducers: {
        isSignInbtn: (state, action) => {
            return {
                ...state,
                isSignIn : action.payload,
            }
        },
        isLogInbtn: (state, action) => {
            return {
                ...state,
                isLoggedIn : action.payload,
            }
        },
        signInUser: (state, action) => {
            return {
                ...state,
                user : action.payload
            }
        }
    },
})

export default userSlice.reducer;
export const {isLogInbtn,isSignInbtn,signInUser} = userSlice.actions