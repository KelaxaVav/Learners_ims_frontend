import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    user: undefined,
    user_type: undefined,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setUserData: (state, action) => {
            state.user = action.payload;
        },
        setLogout: (state) => {
            state.user = undefined;
        },
        setUserAccountType: (state, action) => {
            state.user_type = action.payload;
        }
    }
});

export const {
    setIsLoading,
    setUserData,
    setLogout,
    setUserAccountType,
} = userSlice.actions;

export default userSlice.reducer;