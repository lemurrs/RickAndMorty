import React, {useState} from "react";
import { useGetAllCharactersQuery} from "../../store/api/characters";
import CharacterCard from "../../Components/CharacterCard/CharacterCard";
import RickAndMorty from '../../Assets/imgs/RickAndMorty.png'
import c from './HomePage.module.css'
import {Button, Container} from "@mui/material";
export function HomePage(){
    let [page,setPage]=useState(1)
    const {data: allCharacters, isLoading, error} = useGetAllCharactersQuery(page)
    if(isLoading) return <h1>Lodink.......</h1>
    if(error) return <h1>Chtoto posho ne tak</h1>
    return(<div className={c.HomePage}>
        <div className={c.HomePage__RickAndMorty}>
           <img src={RickAndMorty} alt={'rickmorty'}/>
        </div>
        <Container maxWidth={'lg'}>

            <div className={c.HomePage__cards}>
                {allCharacters?.results.map(characterData=>(
                    <CharacterCard key = {characterData.id}
                                   data={characterData}
                    />
                ))}
            </div>
            <div className={c.HomePage__paginator}>
                {page>1 && <Button variant="contained" size={'large'} sx={{fontSize:'2rem',fontFamily:'RickMorty',}} onClick={()=>{setPage(--page)}}>Prev</Button>}
                {page<42 && <Button variant="contained" size={'large'} sx={{fontSize:'2rem', fontFamily:'RickMorty'}} onClick={()=>{setPage(++page)}}>Next</Button>}
            </div>

        </Container>
    </div>)
}