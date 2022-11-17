import React, {useState} from "react";
import '../../Assets/css/CardCss.css'
import c from './LocationPage.module.css'
import {Button, Container} from "@mui/material";
import {useGetAllLocationsQuery} from "../../store/api/characters";
import LocationCard from "../../Components/LocationCard/LocationCard";

const LocationPage = ()=>{
    let [page,setPage]=useState(1)
    const {data: allLocations, isLoading, error} = useGetAllLocationsQuery(page)
    if(isLoading) return <h1>Lodink.......</h1>
    if(error) return <h1>Chtoto posho ne tak</h1>
    return(<div className={c.LocationPage}>
        <Container maxWidth={'lg'}>
            <div className={`CardGallery ${c.LocationCards}`}>
                {allLocations?.results.map(locationData=>(
                    <LocationCard key = {locationData.id}
                                   data={locationData}
                    />
                ))}
            </div>
            <div className={c.LocationPage__paginator}>
                {page>1 && <Button variant="contained" size={'large'} sx={{fontSize:'2rem',fontFamily:'RickMorty',}} onClick={()=>{setPage(--page)}}>Prev</Button>}
                {page<6 && <Button variant="contained" size={'large'} sx={{fontSize:'2rem', fontFamily:'RickMorty'}} onClick={()=>{setPage(++page)}}>Next</Button>}
            </div>
        </Container>
    </div>)
}



export default LocationPage