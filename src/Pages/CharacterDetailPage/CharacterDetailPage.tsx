import React from "react";
import {useGetCharacterDetailByIdQuery} from "../../store/api/characters";
import {useParams} from "react-router-dom";
import c from './CharacterDetailPage.module.css'
export function CharacterDetailPage(){
    const {id}= useParams()
    const {data: Data, isLoading, error}=useGetCharacterDetailByIdQuery(Number(id) || null)
    if(isLoading) return <h1>Lodink.......</h1>
    if(error) return <h1>Chtoto posho ne tak</h1>
    if(!Data) return <h1>Empty Data</h1>
    return(<div className={c.Card}>
            <div className={c.Card__info}>
                <img src={Data.image} alt={'sd'}/>
                <p>{Data.name} </p>
                <p>{Data.gender} </p>
            </div>
    </div>)
}