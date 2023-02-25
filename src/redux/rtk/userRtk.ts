import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API } from "../../api/api";

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: API }),
    endpoints: (builder) => ({
        getPokemonByName: builder.query({
            query: (name) => `cv/${name}`,
        }),
    }),
});

export const { useGetPokemonByNameQuery } = pokemonApi;