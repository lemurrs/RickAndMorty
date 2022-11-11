import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "../../constants";
import {IAllCharacters, ICharacter} from "../../interface";

export const charactersApi = createApi({
    reducerPath: 'charactersApi',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints:(builder)=>({
        getAllCharacters:builder.query<IAllCharacters,number | null>({
            query:(p)=>`/character/?page=${p}`,
        }),
        getCharacterDetailById:builder.query<ICharacter,number | null>({
            query:(id)=>`/character/${id}`
        })
    })
})
export const {useGetAllCharactersQuery,useGetCharacterDetailByIdQuery} = charactersApi