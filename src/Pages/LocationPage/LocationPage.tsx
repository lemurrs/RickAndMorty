import React, {useState} from "react";
import '../../Assets/css/GeneralCss.css'
import c from './LocationPage.module.css'
import {Button, Container} from "@mui/material";
import {useGetAllLocationsQuery} from "../../store/api/characters";
import LocationCard from "../../Components/LocationCard/LocationCard";

export function LocationPage() {
    let [page, setPage] = useState(1)
    const {data: allLocations, isLoading, error} = useGetAllLocationsQuery(page)
    return (<div className={c.LocationPage}>
        <Container maxWidth={'lg'}>
            <div className={`CardGallery ${c.LocationCards}`}>
                {allLocations?.results.map(locationData => (
                    <LocationCard key={locationData.id}
                                  data={locationData}
                    />

                ))}
            </div>
            <div className={`PaginatorButtons`}>
                {allLocations?.info.prev && !error &&
                    <Button variant="contained" size={'large'} sx={{fontSize: '2rem', fontFamily: 'RickMorty',}}
                            onClick={() => {
                                setPage(--page)
                            }}>Prev</Button>}
                {allLocations?.info.next && !error &&
                    <Button variant="contained" size={'large'} sx={{fontSize: '2rem', fontFamily: 'RickMorty'}}
                            onClick={() => {
                                setPage(++page)
                            }}>Next</Button>}
            </div>
        </Container>
    </div>)
}


