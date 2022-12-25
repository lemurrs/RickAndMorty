import React, {useState} from "react";
import '../../Assets/css/GeneralCss.css'
import c from '../HomePage/HomePage.module.css'
import {Button, Container} from "@mui/material";
import {useGetAllEpisodesQuery} from "../../store/api/characters";
import EpisodeCard from "../../Components/EpisodeCard/EpisodeCard";

export function EpisodePage() {
    let [page, setPage] = useState(1)
    const {data: allEpisodes, error} = useGetAllEpisodesQuery(page)
    return (<div className={c.EpisodePage}>
        <Container maxWidth={'lg'}>

            <div className={`CardGallery`}>
                {allEpisodes?.results.map(EpisodeData => (
                    <EpisodeCard key={EpisodeData.id}
                                 data={EpisodeData}
                    />
                ))}
            </div>
            <div className={`PaginatorButtons`}>
                {allEpisodes?.info.prev && !error &&
                    <Button variant="contained" size={'large'} sx={{fontSize: '2rem', fontFamily: 'RickMorty',}}
                            onClick={() => {
                                setPage(--page)
                            }}>Prev</Button>}
                {allEpisodes?.info.next && !error &&
                    <Button variant="contained" size={'large'} sx={{fontSize: '2rem', fontFamily: 'RickMorty'}}
                            onClick={() => {
                                setPage(++page)
                            }}>Next</Button>}
            </div>


        </Container>
    </div>)
}


export default EpisodePage