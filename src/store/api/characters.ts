import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "../../constants";
import {IAllCharacters, ICharacter, IAllEpisodes, EEpisode, IAllLocations,ILocation} from "../../interface";

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
        getAllEpisodes:builder.query<IAllEpisodes,number|null>({
            query:(p)=>`/episode/?page=${p}`
        }),
        getEpisodeById:builder.query<EEpisode,number|null | undefined>({
            query:(id)=>`/episode/${id}`
        }),
        getAllLocations:builder.query<IAllLocations,number|null>({
            query:(p)=>`/location/?page=${p}`
        }),
        getLocationById:builder.query<ILocation,number|null>({
            query:(id)=>`/location/${id}`
        }),
    })
})
export const {useGetAllCharactersQuery,useGetCharacterDetailByIdQuery,useGetAllEpisodesQuery,useGetEpisodeByIdQuery,useGetAllLocationsQuery,useGetLocationByIdQuery} = charactersApi