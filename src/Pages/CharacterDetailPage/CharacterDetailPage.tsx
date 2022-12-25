import React from "react";
import {useGetCharacterDetailByIdQuery} from "../../store/api/characters";
import {useNavigate, useParams} from "react-router-dom";
import c from './CharacterDetailPage.module.css'
import {Container} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Brightness1RoundedIcon from '@mui/icons-material/Brightness1Rounded';
import AllEpisodes from "./AllEpisodes/AllEpisodes";

export function CharacterDetailPage() {
    const {id} = useParams()
    const navigate = useNavigate();
   const {data: Data, isLoading, error} = useGetCharacterDetailByIdQuery(Number(id))


    if (isLoading) return <h1>Loading data...</h1>
    if (error) return <h1>Something wrong</h1>
    if (!Data) return <h1>Empty Data</h1>

    //Status Circle Color Logic
    const isAlive = Data.status === 'Alive' ? <Brightness1RoundedIcon sx={{color: 'lightgreen'}}/>
        : Data.status === 'unknown' ? <Brightness1RoundedIcon sx={{color: 'gray'}}/>
            : <Brightness1RoundedIcon sx={{color: 'red'}}/>;

    //Navigate On Click Function
    const OnClickHandler = () => {
        navigate('/')
    }

    return (<Container maxWidth={'lg'} sx={{marginBottom: '5rem'}}>
            <div className={c.Card}>
                <span className={c.Card__BackButton} onClick={OnClickHandler}><ArrowBackIcon fontSize={'large'}/> GO BACK</span>
                <div className={c.Card__info}>
                    <div className={c.Card__mainInfo}>
                        <img src={Data.image} alt={'sd'}/>
                        <p className={c.mainInfo__title}>{Data.name} </p>
                    </div>
                    <div className={c.Card__extraInfo}>
                        <div className={c.extraInfo__information}>
                            <h3>Information</h3>
                            <p><b>Gender</b> <br/> {Data.gender} </p>
                            <p><b>Status </b>{isAlive}<br/>{Data.status}</p>
                            <p><b>Specie</b> <br/>{Data.species} </p>
                            <p><b>Origin</b> <br/>{Data.origin.name} </p>
                            {Data.type && <p><b>Type</b> <br/>{Data.type} </p>}
                            <p><b>Location</b> <br/>{Data.location.name} </p>
                        </div>
                        <div className={c.extraInfo__episodes}>
                            <AllEpisodes episodes={Data.episode}/>
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    )
}