import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { api } from "../../app/services/auth";

const slice = createSlice({
    name: "auth",
    initialState: { user: null, token: null } as {
        user: null | any;
        token: null | string;
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            api.endpoints.login.matchFulfilled,
            (state, { payload }) => {
                state.token = payload.result.token;
                state.user = payload.result.user;
            }
        );
    },
});

export default slice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
