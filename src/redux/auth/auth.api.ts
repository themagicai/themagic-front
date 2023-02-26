import { api } from "../index.api";

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        registerUsers: builder.mutation({
            query: (body) => ({
                url: "register",
                method: "POST",
                body,
            }),
        }),
        loginUsers: builder.mutation({
            query: (body) => ({
                url: "login",
                method: "POST",
                body,
            }),
        }),
        logoutUsers: builder.mutation({
            query: (body) => ({
                url: "logout",
                method: "POST",
                body,
            }),
        }),
    }),
});