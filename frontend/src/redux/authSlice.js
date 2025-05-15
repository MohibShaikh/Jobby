import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: localStorage.getItem('token') || null
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
            if (action.payload) {
                localStorage.setItem('user', JSON.stringify(action.payload));
            } else {
                localStorage.removeItem('user');
            }
        },
        setToken: (state, action) => {
            state.token = action.payload;
            if (action.payload) {
                localStorage.setItem('token', action.payload);
            } else {
                localStorage.removeItem('token');
            }
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem('user');
            localStorage.removeItem('token');
        }
    }
});

export const { setLoading, setUser, setToken, logout } = authSlice.actions;
export default authSlice.reducer;