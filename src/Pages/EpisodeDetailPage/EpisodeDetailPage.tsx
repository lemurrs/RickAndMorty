import React from 'react'
import {useParams} from "react-router-dom";
import {
    useGetCharacterDetailByIdQuery,
    useGetEpisodeByIdQuery
} from "../../store/api/characters";
import {Container} from "@mui/material";
import CharacterCard from "../../Components/CharacterCard/CharacterCard";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
function EpisodeDetailPage(){
    const {id} = useParams()

    const {data: EpisodeDetails} = useGetEpisodeByIdQuery(Number(id))
    const IDs=EpisodeDetails?.characters.map(el=>Number(el.replace(/[^0-9]/g, '')));
    const {data:CharacterDetails}=useGetCharacterDetailByIdQuery(IDs || [1,2])
    if(!CharacterDetails) return <div>Loading</div>


    return <>
        <Container maxWidth={'lg'}>
            <div className={`detailPage__info`}>
                <p><b>Episode: </b>{EpisodeDetails?.episode}</p>
                <p><b>Name: </b>{EpisodeDetails?.name}</p>
                <p><b>Date: </b>{EpisodeDetails?.air_date}</p>
            </div>
            <div className={`detailPage__TitleBlock`}>
                <ArrowDownwardIcon sx={{transform:'scale(3)'}}/>
                <h2 className={`detailPage__title`}>Detected creatures</h2>
                <ArrowDownwardIcon sx={{transform:'scale(3)'}}/>
            </div>

            <div className={`CardGallery`}>
                {
                    CharacterDetails.length>0 ?
                        CharacterDetails.map((el:any) => (
                            <CharacterCard key={el.id}
                                           data={el}
                            />)): <CharacterCard key={CharacterDetails.id} data={CharacterDetails}/>
                }
            </div>
        </Container>
    </>
}
export default React.memo(EpisodeDetailPage)