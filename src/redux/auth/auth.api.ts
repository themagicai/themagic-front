import { api } from "../index.api";

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        registerUsers: builder.mutation({
            query: (body) => ({
                url: "api/register",
                method: "POST",
                body,
            }),
            invalidatesTags: [],
        }),
        loginUsers: builder.mutation({
            query: (body) => ({
                url: "api/login",
                method: "POST",
                body,
            }),
            invalidatesTags: [],
        }),
        logoutUsers: builder.mutation({
            query: (body) => ({
                url: "api/logout",
                method: "POST",
                body,
            }),
            invalidatesTags: [],
        }),
    }),
});
