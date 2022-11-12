import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "../../constants";
import {IAllCharacters, ICharacter, IAllEpisodes, EEpisode} from "../../interface";

export const charactersApi = createApi({
    reducerPath: 'charactersApi',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints:(builder)=>({
        getAllCharacters:builder.query<IAllCharacters,number | null>({
            query:(p)=>`/character/?page=${p}`,
        }),
        getCharacterDetailById:builder.query<ICharacter,number | null>({
            query:(id)=>`/character/${id}`
        }),
        getAllEpisodes:builder.query<IAllEpisodes,void>({
            query:()=>`/episode/`
        }),
        getEpisodeById:builder.query<EEpisode,number|null | undefined>({
            query:(id)=>`/episode/${id}`
        })
    })
})
export const {useGetAllCharactersQuery,useGetCharacterDetailByIdQuery,useGetAllEpisodesQuery,useGetEpisodeByIdQuery} = charactersApi