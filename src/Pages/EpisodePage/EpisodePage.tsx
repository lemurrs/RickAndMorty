import React, {useState} from "react";
import c from '../HomePage/HomePage.module.css'
import RickAndMorty from "../../Assets/imgs/RickAndMorty.png";
import {Button, Container} from "@mui/material";
import {useGetAllEpisodesQuery} from "../../store/api/characters";
import EpisodeCard from "../../Components/EpisodeCard/EpisodeCard";

const EpisodePage = ()=>{
    let [page,setPage]=useState(1)
    const {data: allEpisodes, isLoading, error} = useGetAllEpisodesQuery(page)
    if(isLoading) return <h1>Lodink.......</h1>
    if(error) return <h1>Chtoto posho ne tak</h1>
    return(<div className={c.HomePage}>
        <div className={c.HomePage__RickAndMorty}>
            <img src={RickAndMorty} alt={'rickmorty'}/>
        </div>
        <Container maxWidth={'lg'}>

            <div className={c.HomePage__cards}>
                {allEpisodes?.results.map(EpisodeData=>(
                    <EpisodeCard key = {EpisodeData.id}
                                   data={EpisodeData}
                    />
                ))}
            </div>
            <div className={c.HomePage__paginator}>
                {page>1 && <Button variant="contained" size={'large'} sx={{fontSize:'2rem',fontFamily:'RickMorty',}} onClick={()=>{setPage(--page)}}>Prev</Button>}
                {page<3 && <Button variant="contained" size={'large'} sx={{fontSize:'2rem', fontFamily:'RickMorty'}} onClick={()=>{setPage(++page)}}>Next</Button>}
            </div>


        </Container>
    </div>)
}



export default EpisodePage