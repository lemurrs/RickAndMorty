import React, {useState} from 'react'
import { useParams} from "react-router-dom";
import {useGetCharacterDetailByIdQuery, useGetLocationByIdQuery} from "../../store/api/characters";
import CharacterCard from "../../Components/CharacterCard/CharacterCard";
import '../../Assets/css/GeneralCss.css'
import {Container} from "@mui/material";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
function LocationDetailPage(){

    const {id} = useParams()

    const {data: LocationDetails} = useGetLocationByIdQuery(Number(id))
    const IDs=LocationDetails?.residents.map(el=>Number(el.replace(/[^0-9]/g, '')));
     const {data:CharacterDetails}=useGetCharacterDetailByIdQuery(IDs || [1,2])
    const [end,setEnd]=useState(20)
    if(!CharacterDetails) return <div>Loading</div>


    return <>
        <Container maxWidth={'lg'}>
            <div className={`detailPage__info`}>
                <p><b>Dimension: </b>{LocationDetails?.dimension}</p>
                <p><b>Name: </b>{LocationDetails?.name}</p>
                <p><b>Type: </b>{LocationDetails?.type}</p>
            </div>
            <div className={`detailPage__TitleBlock`}>
                <ArrowDownwardIcon sx={{transform:'scale(3)'}}/>
                <h2 className={`detailPage__title`}>Detected creatures</h2>
                <ArrowDownwardIcon sx={{transform:'scale(3)'}}/>
            </div>

        <div className={`CardGallery`}>
        {
            CharacterDetails.length>0 ?
            CharacterDetails.slice(0,end).map((el:any) => (
            <CharacterCard key={el.id}
                           data={el}
            />)): <CharacterCard key={CharacterDetails.id} data={CharacterDetails}/>
        }
        </div>
            {end<CharacterDetails.length&&  <div className={`ShowMore`} onClick={()=>{setEnd(end+10)}}>Show more</div>}
        </Container>
    </>
}
export default React.memo(LocationDetailPage)