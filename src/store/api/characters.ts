import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "../../constants";
import {IAllCharacters, ICharacter, IAllEpisodes, EEpisode, IAllLocations,ILocation} from "../../interface";

export const charactersApi = createApi({
    reducerPath: 'charactersApi',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints:(builder)=>({
        getAllCharacters:builder.query<IAllCharacters,[string,string,string,string,number]>({
            query:([Name,species,gender,status,page])=>({
                url:`/character/`,
                params:{
                    page:page,
                    name:Name,
                    species:species,
                    gender:gender,
                    status:status,

                }
            }),
        }),
        getCharacterDetailById:builder.query<ICharacter,number>({
            query:(id)=>`/character/${id}`
        }),
        getAllEpisodes:builder.query<IAllEpisodes,number>({
            query:(p)=>`/episode/?page=${p}`
        }),
        getEpisodeById:builder.query<EEpisode,number>({
            query:(id)=>`/episode/${id}`
        }),
        getAllLocations:builder.query<IAllLocations,number>({
            query:(p)=>`/location/?page=${p}`
        }),
        getLocationById:builder.query<ILocation,number>({
            query:(id)=>`/location/${id}`
        }),
    })
})
export const {useGetAllCharactersQuery,useGetCharacterDetailByIdQuery,useGetAllEpisodesQuery,useGetEpisodeByIdQuery,useGetAllLocationsQuery,useGetLocationByIdQuery} = charactersApi